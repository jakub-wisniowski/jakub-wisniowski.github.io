export const projectsData = {
  'AKN-mobile-app': {
    title: 'AKN mobile app',
    description: [
      `AKN mobile app is designed for students' use. It allows students to
        learn words assigned to their group by teachers via the
        <a [routerLink]="['/projects/AKN-web-app']">AKN web app</a>. Student can either choose
        lessons by selecting them from a list view or by providing the start and
        end date.`,
      `Student can revise or learn words. In revise mode they see all words
        from a given lesson while in learn mode only words not learnt yet are
        displayed. If a word has an additional comment, it can be displayed by
        clicking the "show hint" button. Student can also see their progress
        made in a given lesson.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/angular.png',
        name: 'Angular',
      },
      {
        image: 'assets/images/icons/ionic.png',
        name: 'Ionic',
      },
      {
        image: 'assets/images/icons/html5.png',
        name: 'HTML5',
      },
      {
        image: 'assets/images/icons/css3.png',
        name: 'CSS3',
      },
    ],
    experience: `I've learnt how to create cross-platform apps with Ionic and how to use
    Ionic-specific components such as datepicker. I worked with Cordova and
    learnt HTML, CSS and Angular.`,
    images: [
      { src: 'assets/images/AKN-mobile-app/login.png', alt: 'login' },
      {
        src: 'assets/images/AKN-mobile-app/menu-lesson.png',
        alt: 'lesson menu',
      },
      {
        src: 'assets/images/AKN-mobile-app/choose-scope.png',
        alt: 'choose scope',
      },
      {
        src: 'assets/images/AKN-mobile-app/choose-scope-2.png',
        alt: 'choose scope',
      },
      {
        src: 'assets/images/AKN-mobile-app/revision-learning.png',
        alt: 'choose revision or learning mode',
      },
      {
        src: 'assets/images/AKN-mobile-app/correct.png',
        alt: 'correct response',
      },
      {
        src: 'assets/images/AKN-mobile-app/wrong.png',
        alt: 'incorrect response',
      },
      { src: 'assets/images/AKN-mobile-app/show-hint.png', alt: 'show hint' },
      {
        src: 'assets/images/AKN-mobile-app/progress.png',
        alt: 'progress view',
      },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/mobile-app',
  },
  'AKN-web-app': {
    title: 'AKN web app',
    description: [
      `The AKN web app allows admin to create groups and assign teachers and students to them. Admins can create new accounts and
    change users' credentials. They can also remove users from groups. Teachers can create new lesson, assign it to
    a group and set exact time and date.`,
      `In the lesson view, teacher can add new words, edit them and remove them. Words can be added manually or automatically upon
      providing the app with a csv file. Teacher can also see student's progress in two modes: from last 3 lessons or
      from a specific lesson.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/angular.png',
        name: 'Angular',
      },
      {
        image: 'assets/images/icons/bootstrap.png',
        name: 'Bootstrap',
      },
      {
        image: 'assets/images/icons/html5.png',
        name: 'HTML5',
      },
      {
        image: 'assets/images/icons/css3.png',
        name: 'CSS3',
      },
      {
        image: 'assets/images/icons/sails.png',
        name: 'Sails',
      },
      {
        image: 'assets/images/icons/mongodb.jpg',
        name: 'MongoDB',
      },
      {
        image: 'assets/images/icons/aws.png',
        name: 'AWS',
      },
    ],
    experience: `This project was my first encounter with web development. I've learnt the basics of HTML, CSS, Angular2,
     JavaScript and mongoDB.
    I've been developing this project through all its phases, from the talks with the client until the deployment.
    I've learnt how to authenticate users, allow them to upload files and how to design the web application to be user-friendly.
    Last but not least, I added a speech synthesis feature using Polly provided by Amazon Web Services.
`,
    images: [
      {
        src: 'assets/images/AKN-web-app/add-new-lessons.png',
        alt: 'add new lessons',
      },
      {
        src: 'assets/images/AKN-web-app/AKN-app-preview.png',
        alt: 'AKN app preview',
      },
      {
        src: 'assets/images/AKN-web-app/modify-account.png',
        alt: 'modify account',
      },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/web-app-1337',
  },
  'climate-camp': {
    title: 'Climate camp mobile app',
    description: [
      ` <div>
    Application was designed for the attendees of Climate Camp 2019. It has four basic functionalities:
<div>
    <ul>
        <li>register for the camp</li>
        <li>see event's program</li>
        <li>display program's details</li>
        <li>check the necessary things to pack for the camp</li>
    </ul>
</div>`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/flutter.png',
        name: 'Flutter',
      },
      {
        image: 'assets/images/icons/dart.png',
        name: 'Dart',
      },
      {
        image: 'assets/images/icons/firebase.png',
        name: 'Firebase',
      },
    ],
    experience: `This was my first project in Flutter, I have learnt how to create views, use shared preferences and open external links.
    I have created my very first Firebase project in order to store information about camp's agenda and the list of crucial
     things to take to the camp.
`,
    images: [
      { src: 'assets/images/climate-camp/menu.png', alt: 'main menu' },
      {
        src: 'assets/images/climate-camp/items-list.png',
        alt: 'list of crucial items to pack',
      },
      {
        src: 'assets/images/climate-camp/programme.png',
        alt: 'programme overview',
      },
      {
        src: 'assets/images/climate-camp/details.png',
        alt: 'programme details',
      },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/Climate-Camp-App',
  },
  'climate-camp-website': {
    title: 'Climate Camp website',
    description: [
      `The Climate Camp website is designed to gather all important information
    about the collective and it's actions. It has been released in July 2020
    and is currently being enhanced by nice-to-have features. We are also
    working on improving the performance. It has been built by a team of
    three - UX designer, DevOps specialist and me - a Frontend Developer.`,
      `The website replaced the old Wordpress version - it is now possible to
    add content via a simple markdown editor set up by the DevOps
    specialist. My task was to come up with a suitable frontend
    architechture that would allow scully parse data from the editor and
    display them in the menu.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/angular.png',
        name: 'Angular',
      },
      {
        image: 'assets/images/icons/bootstrap.png',
        name: 'Bootstrap',
      },
      {
        image: 'assets/images/icons/scully.png',
        name: 'Scully',
      },
      {
        image: 'assets/images/icons/transloco.png',
        name: 'Transloco',
      },
    ],
    experience: `I implemented the internationalisation using transloco package. I've
    been trying to optimize the loading speed by using static site generator
    - scully.io. Angular Animations have been used in the project to animate
    route changes. Right now I'm working on images optimization to make sure
    they don't slow down the website too much.`,
    images: [
      {
        src: 'assets/images/climate-camp-website/climate-camp-website-01.png',
        alt: 'main page',
      },
      {
        src: 'assets/images/climate-camp-website/climate-camp-website-02.png',
        alt: 'subpage',
      },
    ],
    website: {
      icon: 'assets/images/icons/climate-camp-logo.png',
      linkText: 'See website',
      href: 'http://www.obozdlaklimatu.org',
    },
  },
  'home-library': {
    title: 'Home library',
    description: [
      `This app allows users to create their private library, which can be
    shared with other people. The owner can add others to their library, if
    the invited person does not have an account, an invitation email is
    sent. Users can add books to their libraries either by filling out a
    form or by providing a link to Google Books.`,
      `Books can be rented to other users or to people outside the system.
Every user can add comments to books in their libraries and mark books
as currently read. The system uses this information to calculate
statistics: books read per month and pages per day.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/angular.png',
        name: 'Angular',
      },
      {
        image: 'assets/images/icons/bootstrap.png',
        name: 'Bootstrap',
      },
      {
        image: 'assets/images/icons/html5.png',
        name: 'HTML5',
      },
      {
        image: 'assets/images/icons/css3.png',
        name: 'CSS3',
      },
      {
        image: 'assets/images/icons/sails.png',
        name: 'Sails',
      },
      {
        image: 'assets/images/icons/mongodb.jpg',
        name: 'MongoDB',
      },
    ],
    experience: `I've learnt how to generate registration links for users and how to
    write web scrapers in order to obtain information about books from
    Google Books.`,
    images: [
      {
        src: 'assets/images/home-library/add-new-book.png',
        alt: 'add new book',
      },
      {
        src: 'assets/images/home-library/home-library.png',
        alt: 'home library',
      },
      {
        src: 'assets/images/home-library/home-library-displayed.png',
        alt: 'home library displayed',
      },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/home-library',
  },
  'lego-app': {
    title: 'Lego app',
    description: [
      `This app is designed for LEGO fans. User can enter the id of project
        they're working on and the app will download an XML file containing all
        the bricks needed in this project. Afterwards, the app will try to
        download images for all the bricks from three different sources.
     `,
      `User can use the application to check if they have all of the bricks. In
     the project view user can increment or decrement the number of bricks.
     If user has all of the bricks from a given type, the row turns green.
     User can export their data to XML file at any time in order to buy
     missing bricks online.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/android.png',
        name: 'Android',
      },
      {
        image: 'assets/images/icons/kotlin.png',
        name: 'Kotlin',
      },
      {
        image: 'assets/images/icons/sqlite.png',
        name: 'SQLite',
      },
    ],
    experience: `I've used http requests in order to obtain XML files and then had to
    parse XML to data and data to XML. I've learnt how to create a list view
    with a row containing more than one element. I used SQLite to store the
    data and all the images were stored in the device memory. I've also
    learnt how to save files to SD card.`,
    images: [
      { src: 'assets/images/lego-app/project-view.png', alt: 'project view' },
      { src: 'assets/images/lego-app/set-url.png', alt: 'set url view' },
      { src: 'assets/images/lego-app/parts.png', alt: 'parts view' },
      {
        src: 'assets/images/lego-app/parts-edited.png',
        alt: 'parts view after editing',
      },
      { src: 'assets/images/lego-app/set-url.png', alt: 'set url view' },
      { src: 'assets/images/lego-app/set-url.png', alt: 'set url view' },
      { src: 'assets/images/lego-app/set-url.png', alt: 'set url view' },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/android-lego-app',
  },
  'mr-dumpling': {
    title: 'Mr Dumpling',
    description: [
      `Mr Dumpling is an educational game addressed to children between 5 and
        10 years of age. It's composed of three educational mini games and one
        arcade mini game. While playing, user gains points which can be
        exchanged for accessories. User can dress up the main character - Mr
        Dumpling or change his colour.`,
      `Each mini game is available in three difficulty levels and in five
        categories. In the first game - quiz, user has to select a correct
        english word describing the image. Depending on the difficulty level,
        options are displayed either as caption or as an audio recording. The
        second game - memory required the user to connect images with
        appropriate words. In the last game - baskets - user has to divide words
        into two categories by swiping left or right.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/unity.png',
        name: 'Unity',
      },
      {
        image: 'assets/images/icons/c-sharp.png',
        name: 'C#',
      },
      {
        image: 'assets/images/icons/google-play-services.png',
        name: 'Google Play Services',
      },
    ],
    experience: `This game was created as my thesis in a three-person group. We drew all
    the illustrations and recorded the audios in order to make the game more
    appealing to children. Mr Dumpling was written using C# and the Unity
    engine. It uses Player Preferences to store user's progress and score.
    Game has been integrated with Google Play Services, so that players can
    compete with their friends and gain achievements. Game is available in
    Google Play Store.`,
    website: {
      icon: 'assets/images/icons/google-play-services.png',
      linkText: 'Download application',
      href: 'https://play.google.com/store/apps/details?id=com.mrdumpling.game',
    },
  },
  planets: {
    title: 'PLanets',
    description: [
      `This app visualises assets from the Star Wars API. Allows users to sort
    assets by attributes when clicking table's header. The webpage uses
    pagination and allows users to modify characters' data. User can also
    add a new character via a form with validation set for every field.
 `,
    ],
    technologies: [
      {
        image: 'assets/images/icons/angular.png',
        name: 'Angular',
      },
      {
        image: 'assets/images/icons/bootstrap.png',
        name: 'Bootstrap',
      },
      {
        image: 'assets/images/icons/html5.png',
        name: 'HTML5',
      },
      {
        image: 'assets/images/icons/css3.png',
        name: 'CSS3',
      },
      {
        image: 'assets/images/icons/jasmine.png',
        name: 'Jasmine',
      },
    ],
    experience: `I've learnt the basics of Bootstrap and had a chance to use pagination
    for the first time. I used reactive Angular forms to validate user's
    input more efficiently. Last but not least I've learnt to write unit
    tests for Angular applications using mock components and mock services.`,
    images: [
      { src: 'assets/images/planets/list-view.png', alt: 'list view' },
      { src: 'assets/images/planets/search.png', alt: 'search view' },
      {
        src: 'assets/images/planets/sorted.png',
        alt: 'column sorted after clicking the header',
      },
      { src: 'assets/images/planets/edit.png', alt: 'edit row view' },
      {
        src: 'assets/images/planets/add-character.png',
        alt: 'add character view',
      },
      { src: 'assets/images/planets/validation.png', alt: 'validation' },
      { src: 'assets/images/planets/error.png', alt: 'error view' },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/angular2-tests',
  },
  'RPN-calc': {
    title: 'RPN calculator',
    description: [
      `Android calculator using the Reversed Polish Notation. Performs basic
      arithmetic operations and allows user to undo an operation or clean the
      stack. In settings user can set number of decimal places they want to
      see. The app saves all the information when device is rotated, so the
      user does not have to re-enter their calculations if their device tilts.`,
    ],
    technologies: [
      {
        image: 'assets/images/icons/android.png',
        name: 'Android',
      },
      {
        image: 'assets/images/icons/kotlin.png',
        name: 'Kotlin',
      },
      {
        image: 'assets/images/icons/sqlite.png',
        name: 'SQLite',
      },
    ],
    experience: `I've understood the lifecycle of a mobile application and used this
    knowledge to prevent user's data from dissapearing when they change
    screen's orientation. I've also learnt how to create the menu and how to
    design buttons and other UI components.`,
    images: [
      { src: 'assets/images/RPN-calc/basic.png', alt: 'basic view' },
      {
        src: 'assets/images/RPN-calc/two-numbers.png',
        alt: 'two numbers view',
      },
      { src: 'assets/images/RPN-calc/sum1.png', alt: 'sum view' },
      { src: 'assets/images/RPN-calc/horizontal.png', alt: 'horizontal view' },
      { src: 'assets/images/RPN-calc/horizontal_minus.png', alt: 'minus view' },
      {
        src: 'assets/images/RPN-calc/horizontal_sum.png',
        alt: 'horizontal sum view',
      },
      {
        src: 'assets/images/RPN-calc/number_precision.png',
        alt: 'settings view',
      },
      {
        src: 'assets/images/RPN-calc/after_precision.png',
        alt: 'view after changing settings',
      },
    ],
    repo: 'http://www.github.com/jakub-wisniowski/RPN-calculator',
  },
};
