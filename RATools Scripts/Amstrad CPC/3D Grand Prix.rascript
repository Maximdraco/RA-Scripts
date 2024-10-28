// 3D Grand Prix
// #ID = 20319

V_1985_Amsoft = {



}

TrackLookup = {
    0x00: "Mosport",
    0x01: "Zandour",
    0x02: "Silverstone",
    0x03: "Anderstorp",
    0x04: "Jarama",
    0x05: "Roeur",
    0x06: "Brands Hatch",
    0x07: "Kyahami",
}

achievement(
    title = "Zandour", points = 10, type="progression",
    description = "End in the Top 3 in the Zandour Track.",
    id = 273394, badge = "302637", published = "17-12-2022 19:45:55", modified = "17-12-2022 19:45:55",
    trigger = byte(0x00A51E) == 1 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in Belgium", points = 25,
    description = "End in first place in the Zandour Track.",
    id = 273402, badge = "302645", published = "17-12-2022 19:45:59", modified = "17-12-2022 19:45:59",
    trigger = byte(0x00A51E) == 1 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Silverstone", points = 10, type="progression",
    description = "End in the Top 3 in the Silverstone Track.",
    id = 273395, badge = "302638", published = "17-12-2022 19:45:56", modified = "17-12-2022 19:45:56",
    trigger = byte(0x00A51E) == 2 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in England", points = 25,
    description = "End in first place in the Silverstone Track.",
    id = 273403, badge = "302646", published = "17-12-2022 19:46:00", modified = "17-12-2022 19:46:00",
    trigger = byte(0x00A51E) == 2 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Anderstorp", points = 10, type="progression",
    description = "End in the Top 3 in the Anderstorp Track.",
    id = 273396, badge = "302639", published = "17-12-2022 19:45:56", modified = "17-12-2022 19:45:56",
    trigger = byte(0x00A51E) == 3 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in Sweden", points = 25,
    description = "End in first place in the Anderstorp Track.",
    id = 273404, badge = "302647", published = "17-12-2022 19:46:00", modified = "17-12-2022 19:46:00",
    trigger = byte(0x00A51E) == 3 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Jarama", points = 10, type="progression",
    description = "End in the Top 3 in the Jarama Track.",
    id = 273397, badge = "302640", published = "17-12-2022 19:45:57", modified = "17-12-2022 19:45:57",
    trigger = byte(0x00A51E) == 4 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in Spain", points = 25,
    description = "End in first place in the Jarama Track.",
    id = 273405, badge = "302648", published = "17-12-2022 19:46:01", modified = "17-12-2022 19:46:01",
    trigger = byte(0x00A51E) == 4 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Roeur", points = 25, type="progression",
    description = "End in the Top 3 in the Roeur Track.",
    id = 273398, badge = "302641", published = "17-12-2022 19:45:57", modified = "17-12-2022 19:45:57",
    trigger = byte(0x00A51E) == 5 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in France", points = 50,
    description = "End in first place in the Roeur Track.",
    id = 273406, badge = "302649", published = "17-12-2022 19:46:01", modified = "17-12-2022 19:46:01",
    trigger = byte(0x00A51E) == 5 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Brands Hatch", points = 25, type="progression",
    description = "End in the Top 3 in the Brands Hatch Track.",
    id = 273399, badge = "302642", published = "17-12-2022 19:45:58", modified = "17-12-2022 19:45:58",
    trigger = byte(0x00A51E) == 6 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in Kent", points = 50,
    description = "End in first place in the Brands Hatch Track.",
    id = 273407, badge = "302650", published = "17-12-2022 19:46:02", modified = "17-12-2022 19:46:02",
    trigger = byte(0x00A51E) == 6 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Kyahami", points = 25, type="progression",
    description = "End in the Top 3 in the Kyahami Track.",
    id = 273400, badge = "302643", published = "17-12-2022 19:45:58", modified = "17-12-2022 19:45:58",
    trigger = byte(0x00A51E) == 7 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in South Africa", points = 50,
    description = "End in first place in the Kyahami Track.",
    id = 273408, badge = "302651", published = "17-12-2022 19:46:02", modified = "17-12-2022 19:46:02",
    trigger = byte(0x00A51E) == 7 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Mosport", points = 25, type="win_condition",
    description = "End in the Top 3 in the Mosport Track.",
    id = 273401, badge = "302644", published = "17-12-2022 19:45:59", modified = "17-12-2022 19:45:59",
    trigger = byte(0x00A51E) == 0 && byte(0x00A510) <= 3 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

achievement(
    title = "Top 1 in Canada", points = 50,
    description = "End in first place in the Mosport Track.",
    id = 273409, badge = "302652", published = "17-12-2022 19:46:03", modified = "17-12-2022 19:46:03",
    trigger = byte(0x00A51E) == 0 && byte(0x00A510) == 1 && (prev(byte(0x00C54E)) != 39 && byte(0x00C54E) == 39) &&
              byte(0x00C54E) != 207 && byte(0x00B8AB) == 183
)

leaderboard(
    id = 52853, title = "High Score",
    description = "How many points can you accumulate from the start to the last race?",
    start  = tbyte(0x00A51F) != 0,
    cancel = byte(0x00C54E) == 207,
    submit = byte(0x00A51E) == 0 && byte(0x00C54E) == 39 && byte(0x00A50F) == 3 && byte(0x00A510) <= 3 &&
             byte(0x00B8AB) == 183,
    value = measured(bcd(tbyte(0x00A51F))),
    format = "VALUE"
)

rich_presence_conditional_display(byte(0x00C54E) == 207, "In the title screen")

rich_presence_display("Running in {0}",
    rich_presence_lookup("Track", byte(0x00A51E), TrackLookup, fallback="This message shouldn't appear")
)
