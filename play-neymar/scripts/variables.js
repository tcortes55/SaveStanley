const imgButtonPlay = 'images/buttons/play.png';
const imgButtonPause = 'images/buttons/pause.png';
const imgButtonHome = 'images/buttons/home.png';
const imgButtonRestart = 'images/buttons/redo.png';
const imgButtonPodium = 'images/buttons/podium.png';
const imgButtonTrophy = 'images/buttons/trophy.png';

let imgScenario;
let imgCharacter;
let imgCharacterDead;
let imgCharacterWin;
let imgEnemyDwight;
let imgEnemyMichael;
let imgEnemyFlyingMichael;
let imgGameOver;
let imgFirstAid;
let imgFirstAidResponder;
let imgPretzel;
let imgCrossword;
let imgStressGreen;
let imgStressYellow;
let imgStressRed;
let imgStressBomb;
let imgClock;
let imgClockBlinking;
let imgDay;
let scenario;
let character;
let firstAidResponder;
let musicTheme;
let jumpTheme;
let powerUpTheme;
let failTheme;
let deathTheme;
let endTheme;

let enemies = [];
let powerUps = [];
let pretzelsPositionMatrix = [];
let crosswordsPositionMatrix = [];
let firstAidKit;

// let highScoresText = '';
let highScores = [];
let lastScore;
let currentUserHighScore;

const canvasWidth = 640;
const canvasHeight = 360;

const pretzelYHigh = 100;
const pretzelYLow = 260;
const pretzelFirstXPostion = 500;
const pretzelQuantity = 25;
const crosswordFastForwardMinutes = 30;
const crosswordStressReduction = 20;

const typePretzel = 'PRETZEL';
const typeCrossword = 'CROSSWORD';
const typeFirstAid = 'FIRSTAID';
const typeDeath = 'DEATH';
const typeFinish = 'FINISH';
const typeLevelFinish = 'LEVELFINISH';
const typeNormal = 'NORMAL';

const sceneMenu = 'MENU';
const sceneHighScores = 'HIGHSCORES';
const sceneGame = 'GAME';
const scenePause = 'PAUSE';
const sceneLevelEnd = 'LEVELEND';
const sceneEnd = 'END';

let isGameStopped;
let isGameOver;
let isGameFinished;
let isLevelFinished;

const mapLength = 14000;

let scenarioSpeed = 6;
const imgScenarioWidth = 1280;

const minuteScore = 10;
const pretzelScore = 150;
const crosswordScore = 450;
const allPretzelsScore = 1000;

let mapTimerCount = 0;
let gameStoppedTimerCount = 0;
let scoreBoardTimerCount = 0;
let mapIndex = 0;
let resetButtonVisible;

const indexEnemyKevin = 0;
const indexEnemyAndy = 1;
const indexEnemyMeredith = 2;
const indexEnemyPam = 3;
const indexEnemyToby = 4;
const indexEnemyDwight = 5;
const indexEnemyOscar = 6;
const indexEnemyFlyingPhyllis = 7;
const indexEnemyJim = 8;
const indexEnemyRyan = 9;
const indexEnemyKelly = 10;
const indexEnemyJimAsDwight = 11;
const indexEnemyAngela = 12;
const indexEnemyFlyingCreed = 13;
const indexEnemyMichael = 14;
const indexEnemyFlyingPrisonMike = 15;
const indexEnemyFlyingMichael = 16;

const gameMap = [
  {
    // Dwight, Jim + Michael
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyDwight,
            speed: 8
          },
          {
            enemyId: indexEnemyJim,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingMichael,
            speed: 15
          }
        ],
        duration: 50
      },
      {
        enemies: [
          {
            enemyId: indexEnemyPam,
            speed: 8
          },
          {
            enemyId: indexEnemyDwight,
            speed: 10
          },
          {
            enemyId: indexEnemyJimAsDwight,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingPrisonMike,
            speed: 15
          }
        ],
        duration: 50
      },
      {
        enemies: [
          {
            enemyId: indexEnemyToby,
            speed: 8
          },
          {
            enemyId: indexEnemyRyan,
            speed: 12
          },
          {
            enemyId: indexEnemyKelly,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingMichael,
            speed: 15
          }
        ],
        duration: 50
      },
      {
        enemies: [
          {
            enemyId: indexEnemyKevin,
            speed: 7
          },
          {
            enemyId: indexEnemyOscar,
            speed: 10
          },
          {
            enemyId: indexEnemyAngela,
            speed: 14
          },
          {
            enemyId: indexEnemyFlyingPrisonMike,
            speed: 12
          }
        ],
        duration: 50
      }
    ]
  },
  {
    // Pam, Dwight, Jim + Prison Mike
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyPam,
            speed: 8
          },
          {
            enemyId: indexEnemyDwight,
            speed: 10
          },
          {
            enemyId: indexEnemyJimAsDwight,
            speed: 12
          },
          // {
          //   enemyId: indexEnemyFlyingPrisonMike,
          //   speed: 12
          // }
        ],
        duration: 100
      },
      {
        enemies: [
          {
            enemyId: indexEnemyPam,
            speed: 8
          },
          {
            enemyId: indexEnemyDwight,
            speed: 10
          },
          {
            enemyId: indexEnemyJimAsDwight,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingPrisonMike,
            speed: 15
          }
        ],
        duration: 600
      }
    ]
  },
  {
    // Andy, Michael + Creed
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyAndy,
            speed: 8
          },
          {
            enemyId: indexEnemyMichael,
            speed: 12
          },
          // {
          //   enemyId: 5,
          //   speed: 15
          // }
        ],
        duration: 50
      },
      {
        enemies: [
          {
            enemyId: indexEnemyAndy,
            speed: 7
          },
          {
            enemyId: indexEnemyMichael,
            speed: 14
          },
          {
            enemyId: indexEnemyFlyingCreed,
            speed: 10
          }
        ],
        duration: 250
      },
      {
        enemies: [
          {
            enemyId: indexEnemyAndy,
            speed: 8
          },
          {
            enemyId: indexEnemyMichael,
            speed: 15
          },
          {
            enemyId: indexEnemyFlyingCreed,
            speed: 10
          }
        ],
        duration: 250
      },
      {
        enemies: [
          {
            enemyId: indexEnemyAndy,
            speed: 8
          },
          {
            enemyId: indexEnemyMichael,
            speed: 14
          },
          {
            enemyId: indexEnemyFlyingCreed,
            speed: 10
          }
        ],
        duration: 250
      },
      {
        enemies: [
          {
            enemyId: indexEnemyAndy,
            speed: 8
          },
          {
            enemyId: indexEnemyMichael,
            speed: 15
          },
          {
            enemyId: indexEnemyFlyingCreed,
            speed: 12
          }
        ],
        duration: 250
      }
    ]
  },
  {
    // Toby, Ryan, Kelly + Michael
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyToby,
            speed: 8
          },
          {
            enemyId: indexEnemyRyan,
            speed: 12
          },
          {
            enemyId: indexEnemyKelly,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingMichael,
            speed: 15
          }
        ],
        duration: 5000
      }
    ]
  },
  {
    // Kevin, Oscar, Angela + Prison Mike
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyKevin,
            speed: 7
          },
          {
            enemyId: indexEnemyOscar,
            speed: 10
          },
          {
            enemyId: indexEnemyAngela,
            speed: 14
          },
          // {
          //   enemyId: indexEnemyFlyingPrisonMike,
          //   speed: 12
          // }
        ],
        duration: 100
      },
      {
        enemies: [
          {
            enemyId: indexEnemyKevin,
            speed: 7
          },
          {
            enemyId: indexEnemyOscar,
            speed: 10
          },
          {
            enemyId: indexEnemyAngela,
            speed: 14
          },
          {
            enemyId: indexEnemyFlyingPrisonMike,
            speed: 12
          }
        ],
        duration: 600
      }
    ]
  },
  {
    // Meredith, Michael + Phyllis, Creed
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyMeredith,
            speed: 7
          },
          {
            enemyId: indexEnemyMichael,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingPhyllis,
            speed: 10
          }
        ],
        duration: 100
      },
      {
        enemies: [
          {
            enemyId: indexEnemyMeredith,
            speed: 8
          },
          {
            enemyId: indexEnemyMichael,
            speed: 12
          },
          {
            enemyId: indexEnemyFlyingCreed,
            speed: 15
          },
          {
            enemyId: indexEnemyFlyingPhyllis,
            speed: 10
          }
        ],
        duration: 700
      }
    ]
  },
  {
    // Dwight, Andy, Michael PARKOUR
    levelMap: [
      {
        enemies: [
          {
            enemyId: indexEnemyAndy,
            speed: 8
          },
          {
            enemyId: indexEnemyDwight,
            speed: 10
          },
          {
            enemyId: indexEnemyMichael,
            speed: 12
          }
        ],
        duration: 5000
      }
    ]
  }
]

const stanleyWidth = 90;
const stanleyHeight = 145;
const dwightWidth = 90;
const dwightHeight = 145;
const michaelWidth = 90;
const michaelHeight = 140;
const flyingMichaelWidth = 90;
const flyingMichaelHeight = 110;
const firstAidResponderWidth = 90;
const firstAidResponderHeight = 145;

const stanleyOffsetX = 60;
const stanleyOffsetY = 5;

const stanleyPositionMatrix = [
  [0, 0],
  [stanleyWidth, 0],
  [stanleyWidth * 2, 0],
  [stanleyWidth * 3, 0]
];

const dwightPositionMatrix = [
  [0, 0],
  [dwightWidth, 0],
  [dwightWidth * 2, 0],
  [dwightWidth * 3, 0]
];

const michaelPositionMatrix = [
  [0, 0],
  [michaelWidth, 0],
  [michaelWidth * 2, 0],
  [michaelWidth * 3, 0]
];

const flyingMichaelPositionMatrix = [
  [0, 0],
  [flyingMichaelWidth, 0],
  [flyingMichaelWidth * 2, 0],
  [flyingMichaelWidth * 3, 0]
];

const firstAidResponderPositionMatrix = [
  [0, 0],
  [firstAidResponderWidth, 0],
  [firstAidResponderWidth * 2, 0],
  [firstAidResponderWidth * 3, 0]
];