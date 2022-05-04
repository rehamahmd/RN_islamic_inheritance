export enum Locales { // camel case

    appName = 'appName',

    husband= 'husband', // زوج
    wife= 'wife',
    // Descendants احفاد
    son=   'son',
    daughter=   'daughter',
    paternal_grand_son=   'paternal_grand_son', // بن الابن
    paternal_grand_daughter=   'paternal_grand_daughter', //بنت الابن
    
    // Ancestors اسلاف
    father=   'father',
    mother=   'mother',
    paternal_grand_father=   'paternal_grand_father', // الجد لأب
    paternal_grand_mother=   'paternal_grand_mother', // الجدة لأب
    maternal_grand_mother=   'maternal_grand_mother', //  الجدة لأم
    
    // Sibling // إخوة
    full_brother=   'full_brother', // الأخ الشقيق
    full_sister=   'full_sister', // اخت شقيقة
    paternal_sister=   'paternal_sister', // أخت لأب

    paternal_brother=   'paternal_brother', // شقيق الأب
    maternal_sibling=   'maternal_sibling', // شقيق الأم
    
    // Other // اخري
    full_nephew=   'full_nephew', //   ابن أخ الشقيق
    paternal_nephew=  'paternal_nephew', // ابن اخ الأب

    full_paternal_uncle=  'full_paternal_uncle', // العم الشقيق 
    paternal_paternal_uncle=  'paternal_paternal_uncle', //  عم الأب
    full_cousin=  'full_cousin', //ابن عم شقيق
    paternal_cousin=  'paternal_cousin', // ابن عم الأب
  
    // Welcome screen
    letStart = 'letStart',
    welcomeFirstScreenTitle = 'welcomeFirstScreenTitle',
    welcomeFirstScreenDescription = 'welcomeFirstScreenDescription',
    welcomeSecondScreenTitle = 'welcomeSecondScreenTitle',
    welcomeSecondScreenDescription = 'welcomeSecondScreenDescription',

    // Auth Screens
    loginTitle = 'loginTitle',
    signupTitle = 'signupTitle',
    emailAddress = 'emailAddress',
    password = 'password',
    firstName = 'firstName',
    lastName = 'lastName',
    signIn = 'signIn',
    signup = 'signup',
    forgetPassword = 'forgetPassword',
    donotHaveAccount = 'donotHaveAccount',
    alreadyHaveAccount = 'alreadyHaveAccount',
    forgetPasswordDescription1 = 'forgetPasswordDescription1',
    forgetPasswordDescription2 = 'forgetPasswordDescription2',
    registeredEmail = 'registeredEmail',
    requestResetLink = 'requestResetLink',
    forgetPasswordSuccessMsg = 'forgetPasswordSuccessMsg',
    forgetPasswordErrorMsg = 'forgetPasswordErrorMsg',
    signupErrorsMsg = 'signupErrorsMsg',
    loginErrorsMsg = 'loginErrorsMsg',
    termsAndConditionsMsg = 'termsAndConditionsMsg',
    and = 'and',

    // Onboarding Scerens
    stepOne = 'stepOne',
    stepOneTitle = 'stepOneTitle',
    stepTwo = 'stepTwo',
    stepTwoTitle = 'stepTwoTitle',
    stepThree = 'stepThree',
    stepThreeTitle = 'stepThreeTitle',
    stepThreeDescription1 = 'stepThreeDescription1',
    stepThreeDescription2 = 'stepThreeDescription2',
    testNow = 'testNow',
    next = 'next',
    later = 'later',

    // Home Screen
    start = 'start',
    devicesError = 'devicesError',
    pairOrLink = 'pairOrLink',
    polarBelt = 'polarBelt',
    wahooBike = 'wahooBike',
    noBikeConnected = 'noBikeConnected',
    noBeltConnected = 'noBeltConnected',
    pairNow = 'pairNow',
    recentRoute = 'recentRoute',
    play = 'play',
    seeMyActivity = 'seeMyActivity',

    // History Screen
    activitiesTitle = 'activitiesTitle',
    totalDistance = 'totalDistance',
    totalRides = 'totalRides',
    totalTime = 'totalTime',
    avgSpeed = 'avgSpeed',
    distance = 'distance',
    time = 'time',
    speed = 'speed',
    activity = 'activity',
    ride = 'ride',
    sync = 'sync',
    syncErrorMsg = 'syncErrorMsg',

    // Calibration
    calibrationResultTitle = 'calibrationResultTitle',
    positionOneName = 'positionOneName',
    positionTwoName = 'positionTwoName',
    positionThreeName = 'positionThreeName',
    positionFourName = 'positionFourName',
    position = 'position',
    firstPositionsubtitle = 'firstPositionsubtitle',
    firstPositionInstructions = 'firstPositionInstructions',
    fourthPositionsubtitle = 'fourthPositionsubtitle',
    fourthPositionInstructions = 'fourthPositionInstructions',
    startCalibration = 'startCalibration',
    instructions = 'instructions',
    instructionsText = 'instructionsText',
    polarError = 'polarError',
    record = 'record',
    getReady = 'getReady',
    timeRemaining = 'timeRemaining',
    repeatTest = 'repeatTest',
    calibrationNotComplete = 'calibrationNotComplete',
    calibrationNotCompleteText = 'calibrationNotCompleteText',
    calibrationIsNotValid = 'calibrationIsNotValid',
    polarInstructions = 'polarInstructions',
    polarInstructionsText = 'polarInstructionsText',
    positionInstructions = 'positionInstructions',
    calibratedSuccessfully = 'calibratedSuccessfully',
    calibrationNotValid = 'calibrationNotValid',
    notYetCompleted = 'notYetCompleted',
    angle = 'angle',

    // Pairing
    back = 'back',
    connected = 'connected',
    notConnected = 'notConnected',
    connectNow = 'connectNow',
    pairYourDevices = 'pairYourDevices',
    pairingOnboardingText = 'pairingOnboardingText',
    yourDevices = 'yourDevices',
    searchingForDevices = 'searchingForDevices',
    availableDevices = 'availableDevices',

    // Bike Pairing
    bikePairingInstruction = 'bikePairingInstruction',

    // Polar Pairing
    polarPairingInstructions1 = 'polarPairingInstructions1',
    polarPairingInstructions2 = 'polarPairingInstructions2',
    polarFirmwareMsg1 = 'polarFirmwareMsg1',
    polarFirmwareMsg2 = 'polarFirmwareMsg2',
    updateNow = 'updateNow',

    // Training Recording
    bpm = 'bpm',
    watt = 'watt',
    recommendedPosition = 'recommendedPosition',
    currentPosition = 'currentPosition',
    powerSaved = 'powerSaved',
    consistency = 'consistency',
    windSpeedAndDirection = 'windSpeedAndDirection',
    totalPauseTime = 'totalPauseTime',

    highWind = 'highWind',
    mediumWind = 'mediumWind',
    lowWind = 'lowWind',
    windInfoText = 'windInfoText',
    windVsPower = 'windVsPower',


    // Training Summary
    roundSummaryTab = 'roundSummaryTab',
    positionTab = 'positionTab',
    powerAnalysisTab = 'powerAnalysisTab',

    heartRate = 'heartRate',
    power = 'power',
    rpm = 'rpm',
    drag = 'drag',
    timeSaved = 'timeSaved',
    myStatsCoachMsg1 = 'myStatsCoachMsg1',
    myStatsCoachMsg2 = 'myStatsCoachMsg2',
    myStatsCoachMsg3 = 'myStatsCoachMsg3',
    positionEfficiency = 'positionEfficiency',
    positionEfficiencyMsg = 'positionEfficiencyMsg',
    avgPower = 'avgPower',
    minPower = 'minPower',
    maxPower = 'maxPower',
    duration = 'duration',
    avgHR = 'avgHR',
    consistencyScore = 'consistencyScore',
    powerAnalysis = 'powerAnalysis',
    caloriesBurned = 'caloriesBurned',
    kcal = 'kcal',
    recommendedPositionText1 = 'recommendedPositionText1',
    recommendedPositionText2 = 'recommendedPositionText2',
    recommendedPositionText3 = 'recommendedPositionText3',
    recommendedPositionText4 = 'recommendedPositionText4',
    recommended= 'recommended',
    actual= 'actual',
    wind = 'wind',

    // Profile
    biked = 'biked',
    email = 'email',
    yearOfBirth = 'yearOfBirth',
    gender = 'gender',
    weight = 'weight',
    height = 'height',
    logout = 'logout',
    weightAndHeightTitle = 'weightAndHeightTitle',
    yearAndGenderTitle = 'yearAndGenderTitle',
    yourWeight = 'yourWeight',
    yourHeight = 'yourHeight',
    shoulderWidth = 'shoulderWidth',
    shoulderToHip = 'shoulderToHip',

    done = 'done',
    male = 'male',
    female = 'female',
    profileUpdateErrorMsg = 'profileUpdateErrorMsg',

    // Settings
    settings = 'settings',
    linkedSensores = 'linkedSensores',
    unitOfMeasure = 'unitOfMeasure',
    unitOfMeasureSubtitile = 'unitOfMeasureSubtitile',
    imperial = 'imperial',
    metric = 'metric',
    bikeWeight = 'bikeWeight',
    wheelCircumference = 'wheelCircumference',
    wheelCircumferenceSubtitle = 'wheelCircumferenceSubtitle',
    coefficientRollingResistance = 'coefficientRollingResistance',
    bikeSettingsTitle = 'bikeSettingsTitle',
    circumference = 'circumference',
    resetToDefault = 'resetToDefault',
    testDone = 'testDone',
    angleCalibrationTest = 'angleCalibrationTest',
    calibrationSettingsSubtitle = 'calibrationSettingsSubtitle',
    noLinkedSensores = 'noLinkedSensores',
    polar = 'polar',
    wahoo = 'wahoo',
    strava = 'strava',
    authorizedApps = 'authorizedApps',
    settingsInvalidDataErrorMsg = 'settingsInvalidDataErrorMsg',

    // About
    aboutTitle = 'aboutTitle',
    version = 'version',
    privacyPolicy = 'privacyPolicy',
    termsAndCondition = 'termsAndCondition',

    // Coach Audio
    coachMoveDownRecommendation = 'coachMoveDownRecommendation',
    coachMoveUpRecommendation = 'coachMoveUpRecommendation',


    // StravaConnnectSuccess
    success = 'Success',
    Connectwithstrava = 'Connectwithstrava',
    connectedText = 'connectedText',
    gotIt = 'gotIt',
    onceConnected = 'onceConnected',
    notNow = 'notNow',

    // Disconnect Strava
    disconnectText = 'disconnectText',
    disconnectKeepRoutes = 'disconnectKeepRoutes',
    disconnectDeleteRoutes = 'disconnectDeleteRoutes',
    confirmDisconnect = 'confirmDisconnect',
    viewSyncedRoutes = 'viewSyncedRoutes',
    noStravaRoutes = 'noStravaRoutes',
    lastSync = 'lastSync',
    disconnect = 'disconnect',

    // Routes
    viewAll = 'viewAll',
    elevation = 'elevation',
    estMoveTime = 'estMoveTime',
    elevationGain = 'elevationGain',
    createdOn = 'createdOn',
    dontShowAgain = 'dontShowAgain',

    connectFromSettingsText = 'connectFromSettingsText',
    gpxFileRoute = 'gpxFileRoute',
    uploadGpxFile = 'uploadGpxFile',
    fileUploading = 'fileUploading',
    oops = 'oops',
    fileNotWorking = 'fileNotWorking',
    failedUploadingFile = 'failedUploadingFile',
    showWindGraph = 'showWindGraph',
    holdToFinish = 'holdToFinish',
    selectTimeAndDate = 'selectTimeAndDate',
    selectDateCardText = 'selectDateCardText',
    selectDateSimualtedTimeText = 'selectDateSimualtedTimeText',
    DateAndTime = 'DateAndTime',

    playedXTimes = 'playedXTimes',
    viewHistory = 'viewHistory',
    elevationGraph = 'elevationGraph',
    windGraph = 'windGraph',
    elevationAbbreviation = 'elevationAbbreviation',
    grade = 'grade',
    windSpeed = 'windSpeed',
    windAngle = 'windAngle',


    trainSpecificDateInfo = 'trainSpecificDateInfo',
    trainSpecificDateText = 'trainSpecificDateText',
    great = 'great',

    noRoutesText = 'noRoutesText',
    visitStravaText = 'visitStravaText',
    tryAgain = 'tryAgain',
    fileName = 'fileName',
    fileUploaded = 'fileUploaded',
    routeStart = 'routeStart',
    noRoutes = 'noRoutes',
    today = 'today',
    selectDateAndTime = 'selectDateAndTime',
    selectTime = 'selectTime'
}
