import { AchievementSet, define as $ } from '@cruncheevos/core'
// Al this functions are made for the format I use for my code notes

// Full info in https://docs.retroachievements.org/developer-docs/achievement-development-overview.html#flags
// All non numeric values have to be strings
// ----------------------------------------------------
// flag
// '' (none)
// PauseIf      | Pause (freeze) the achievement while this conditions is true, only on the alt group
// ResetIf      | Clean hits globally, the achievement doesn't trigger while this is true, they can't reset each other
// ResetNextIf  | Same as ResetIf, but if is true, only reset the next line or chain (AndNext and OrNext)
// AddHits      | Add the hits of this condition to the hits of the next line
// SubHits      | AddHits, but it substract the hits
// AndNext      | This and the next condition have to be true at the same time, form logic chains
// OrNext       | This or the next condition have to be true, form logic chains
// Measured     | For tracking conditions, show value/total
// Measured%    | Measured but %
// MeasuredIf   | Must be true for the Measured to be active, if it isn't used, the Measured will always be active
// Trigger      | If this are the last conditions or chains needing to be true, the icon will appear on screen
// AddSource    | Adds the value of the address to the next one
// SubSource    | Substract the value of the address to the next one, be carefull with negative values
// AddAddress   | Adds the value of the address with the flag to the next address, used for pointers
//                AddAddress Pointer
//                           Offset...
// Remember     | Saves it's value in Recall (Type) to use later, one per group
// -----------------------------------------------------
// type
// '' (none)
//
// Addresses:
// Mem    | A memory address
// Delta  | The value of the address in the previous frame
// Prior  | Checks for the previous value of the address after changing
//          | frame | value | delta | prior |
//          | ----- | ----- | ----- | ----- |
//          |   1   |  10   |   0   |   0   |
//          |   1   |  10   |  10   |   0   |
//          |   1   |  20   |  10   |  10   |
//          |   1   |  20   |  20   |  10   |
//          | ----- | ----- | ----- | ----- |
// BCD    | Interpret the hex value of the address and decimal 0x10 = 10, normally 0x10 = 16
// Invert | Invert values of each bit of the address
//
// Values:
// Value  | A simple integer, can be positive, negative or 0 (size 32 bits)
// Float  | Like Value, but is a float instead of an integer
// Recall | Recover the values stored with Remember (flag), doesn't have size or address or value
// -----------------------------------------------------
// size
// '' (none)
// Bit0 - Bit7 | Value of the specific bit of the address
// Lower4      | Bits 0-3
// Upper4      | Bits 4-7
//
// Normal sizes (LI): (12 34 56 78)
// 8bit
// 16bit
// 24bit
// 32bit
// Double32
// Float       | The address stores a float value
//
// BE:         |  The bytes are in reverse order (78 56 34 12)
// 16bitBE
// 24bitBE
// 32bitBE
// Double32BE
// FloatBE     | float and BE
//
// BitCount    | Count the value of the bytes of the address
//
// MBF32 | Microsoft Binary Format
// MBF32LE | The bytes are in reverse order
// -----------------------------------------------------
// memval | A numerical value or a memory address, specify with Type
// -----------------------------------------------------
// cmp
// '' (none)
// =  | Equal
// != | Not equal
// <
// <=
// >
// >=
// +  | Plus
// -  | Minux
// *  | Multiplication
// /  | Division
// %  | Modulus (division but returns the remainder)
// &  | Bitwise-mask use another value to preserve bits, the rest will be considered always as 0
// ^  | Bitwise-XOR (the bit will be 1 if both size have different values in that bit, otherwise it will be 0)
// -----------------------------------------------------
// hit | Positive integers
// console.log()

// General functions
export function is_dictionary(element){
    return (typeof element === 'object' && element !== null && !Array.isArray(element))
}

// Logic related functions

// [flag, type1, size1, memval1, cmp, type2, size2, memval2, hit]

// Function to convert multiple conditions (in list form) into
// achievement logic
// array = Array with achievement logic in list form
// logic = Either an achievement logic line in list form or
//         achievement logic.
//         This will be put first in the final achievement logic.
export function assembler(array, logic=undefined){
    var x
    if (logic == undefined){x = $(array[0])}
    else {x = $(logic, array[0])}

    if (array.length > 1){
        for (var i = 1; i < array.length; i++){x = $(x, array[i])}
    }
    return x
}

export function simple_pointer(pointer, offset_logic){
    var type = pointer.type
    var size = pointer.size
    var address = pointer.address
    return $(
        ["AddAddress", type, size, address],
        offset_logic
    )
}

// Clean a bit more but it works
// functions is a list with dictionaries with the next estructure:
// fn: The name of the function we will call
// args: A list of arguments for the functions
// versions is the list of versions of the game
export function simple_achievement_logic(functions, versions) {
    var alt_groups = {}
    // How many versions are in the list
    var numVersions = versions.length

    // If there is only 1 version
    if (numVersions == 1) {
        // map() is calling each function with the index of a version in
        // the list of versions (used by all functions), and the other
        // arguments passed in the functions variable
        alt_groups.core = functions.map(f => f.fn(0, ...(f.args || [])))

    } else {

        alt_groups.core = "1=1"
        for (let i = 0; i < numVersions; i++) {
            var altG = "alt" + (i + 1)
            // map() is calling each function with the index of a version in
            // the list of versions (used by all functions), and the other
            // arguments passed in the functions variable
            alt_groups[altG] = functions.map(f => f.fn(i, ...(f.args || [])))
        }
    }

    return alt_groups
}
