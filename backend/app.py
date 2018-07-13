import soco

import time

NAME = "stink studios"

zones = soco.discover()

stink_zone = next((x for x in zones if x.player_name.lower() == NAME), None)

while True:
    track = stink_zone.get_current_track_info()

    print(track['title'], track['position'])

    time.sleep(1)
