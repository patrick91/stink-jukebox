import soco

NAME = "stink studios"

zones = soco.discover()

sonos = next((x for x in zones if x.player_name.lower() == NAME), None)
