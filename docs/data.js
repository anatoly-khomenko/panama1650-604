var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10888635001342806,
          "pitch": 0.1871345137603342,
          "rotation": 0,
          "target": "1-salle-a-manger"
        },
        {
          "yaw": 0.620704067059366,
          "pitch": 0.09730194847391438,
          "rotation": 0,
          "target": "3-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salle-a-manger",
      "name": "Salle a manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5538511437635414,
          "pitch": 0.23422237251900846,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": 2.8239876549628598,
          "pitch": 0.4521013950787349,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": 1.5664102395596284,
          "pitch": 0.2605144414193994,
          "rotation": 0,
          "target": "3-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05376738183302976,
          "pitch": -0.048663606040285856,
          "rotation": 0,
          "target": "3-entre"
        },
        {
          "yaw": -2.9654102651349596,
          "pitch": 0.26494629955267435,
          "rotation": 0,
          "target": "1-salle-a-manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.6452760716793726,
        "pitch": 0.2042537817359218,
        "fov": 1.3517668344523721
      },
      "linkHotspots": [
        {
          "yaw": 2.8151484638613207,
          "pitch": 0.2597122783032617,
          "rotation": 0,
          "target": "4-chambre-principale"
        },
        {
          "yaw": -2.797722022253698,
          "pitch": 0.26222998322982605,
          "rotation": 0,
          "target": "5-chambre"
        },
        {
          "yaw": 1.1403948487487146,
          "pitch": 0.30289879314385715,
          "rotation": 0,
          "target": "6-salle-de-bain"
        },
        {
          "yaw": -0.9036874036040707,
          "pitch": 0.0709408635717459,
          "rotation": 0,
          "target": "2-cuisine"
        },
        {
          "yaw": -1.814940609041635,
          "pitch": 0.1410961664561654,
          "rotation": 0,
          "target": "1-salle-a-manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-chambre-principale",
      "name": "Chambre principale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9107985891114456,
          "pitch": 0.21443949901239634,
          "rotation": 0,
          "target": "3-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre",
      "name": "Chambre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5350778324668894,
          "pitch": 0.1699159865169726,
          "rotation": 0,
          "target": "3-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salle-de-bain",
      "name": "Salle de bain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7777724949890494,
          "pitch": 0.10987026331966732,
          "rotation": 0,
          "target": "3-entre"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "panama1650-604",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
