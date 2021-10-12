import { headerData, footerData, landingSubjectsData } from './menu-data';
export const instanceData = {
  lang: 'en',
  headerData: headerData,
  footerData: footerData,
  strings: {
    header: {
      slogan: 'The Open Learning Platform',
      search: 'Search',
      login: 'Login'
    },
    search: {
      privacy: 'The search is provided by Google. See our %privacypolicy% to find out what information is processed.',
      agree: 'Agree'
    },
    footer: {
      summaryHeading: 'Serlo.org is the Wikipedia for learning.',
      summaryText: 'We are a community of visionaries working tirelessly to make great education freely available to everyone.',
      learnMore: 'Learn more',
      participate: 'Join the cause',
      donate: 'Donate',
      toTop: 'To Top'
    },
    categories: {
      articles: 'Articles',
      courses: 'Courses',
      videos: 'Videos',
      applets: 'Applets',
      folders: 'Folders',
      exercises: 'Exercises',
      events: 'Events',
    },
    entities: {
      applet: 'Applet',
      article: 'Article',
      course: 'Course',
      coursePage: 'Course Page',
      event: 'Event',
      exercise: 'Exercise',
      exerciseGroup: 'Exercise Group',
      folder: 'Folder',
      groupedExercise: 'Grouped Exercise',
      page: 'Page',
      solution: 'Solution',
      taxonomyTerm: 'Taxonomy Term',
      user: 'User',
      video: 'Video',
      topicFolder: 'Exercise folder',
      comment: 'Comment',
      revision: 'Revision',
      thread: 'Thread',
      threads: 'Threads',
      topic: 'Topic',
      subject: 'Subject',
      userProfile: 'User Profile',
      privacyPolicy: 'Privacy Policy',
      content: "Content"
    },
    pageTitles: {
      notifications: 'Your Notifications',
      subscriptions: "Manage Subscriptions",
      revisionHistory: "Revision History",
      eventLog: "Event Log",
      unrevisedRevisions: 'Unrevised Revisions',
      userEdits: 'Edits by %user%',
      userEditsMine: 'My Unrevised Revisions'
    },
    roles: {
      donor: "Donor",
      author: 'Author',
      reviewer: 'Reviewer'
    },
    share: {
      button: 'Share',
      title: 'Share!',
      copyLink: 'Copy link',
      copySuccess: 'Link copied! ',
      close: 'Close',
      pdf: 'Download as PDF',
      pdfNoSolutions: 'PDF without solutions'
    },
    edit: {
      button: 'Edit',
      unrevised: 'Show unrevised revisions'
    },
    license: {
      readMore: 'Info',
      special: 'Different license',
      nonFree: 'Usage of this content might be more restricted than our other content.'
    },
    course: {
      showPages: 'Show course overview',
      pages: 'Course overview',
      next: 'Next',
      back: 'Back'
    },
    content: {
      show: 'show',
      hide: 'hide',
      prerequisite: 'For this task you need the following basic knowledge:',
      task: 'Task',
      right: 'Right',
      wrong: 'Wrong',
      feedback: 'Feedback',
      answer: 'Answer',
      check: 'Check',
      yourAnswer: 'Your answer…',
      chooseOption: 'Click on one of the options.',
      printModeChooseOption: 'Check one of the options.',
      trashedNotice: 'This content is marked for deletion.',
      unrevisedNotice: 'This content has no accepted revision yet. Please use the %link% to preview.',
      strategy: 'Solution Strategy',
      picture: 'Picture',
      previewImage: 'Preview Image',
      exercisesTitle: 'Exercises',
      moreExercises: 'You can find more exercises in the following folder:',
      relatedContentTitle: 'Still want more?',
      relatedContentText: 'You can find more content on this topic here:',
      sourcesTitle: 'Sources'
    },
    consent: {
      title: 'Consent for external Content',
      intro: 'While using this site you may allowed us to load content from external providers. You can read about the details in the %privacypolicy%.',
      revokeTitle: 'Revoke',
      revokeText: 'Here you can revoke your consent. In this case we ask again, before we load content from those providers',
      noConsent: 'No content saved.',
      revokeConsent: 'Revoke consent'
    },
    embed: {
      text: 'By clicking on image or button above you agree that external content from %provider% will be loaded. Also personal data may be transferred to this service in accordance with our %privacypolicy%.',
      video: 'Play Video from %provider%',
      applet: 'Load Applet from %provider%',
      twingle: 'Load Donation Form'
    },
    comments: {
      question: 'Do you have a question?',
      commentsOne: 'Comment',
      commentsMany: 'Comments',
      submit: 'Submit',
      archiveThread: 'Archive thread',
      restoreThread: 'Restore thread',
      deleteThread: 'Delete thread',
      deleteComment: 'Delete comment',
      postedOn: 'Posted on',
      placeholder: "Your question or suggestion…",
      placeholderReply: "Your answer…",
      loading: 'Looking for comments ...',
      error: 'Sorry, comments could not be loaded, please try again later.',
      showMoreReply: 'Show one more reply',
      showMoreReplies: 'Show %number% more replies',
      showArchived: 'Show archived %threads%',
      copyLink: 'Copy comment link'
    },
    revisions: {
      toOverview: "Back to overview",
      toContent: "Go to content",
      changes: "Changes",
      context: "Context (current version)",
      title: "Title",
      content: "Content",
      metaTitle: "Meta Title",
      metaDescription: "Meta Description",
      diff: "Source view",
      sidebyside: "Side By Side",
      currentVersion: "Current Version",
      thisVersion: "This Version",
      currentNotice: "This is the currently accepted version.",
      rejectedNotice: 'This revision was not accepted.',
      noCurrentNotice: 'There is no accepted revision yet.',
      unknownNotice: 'This revision was accepted once or was never reviewed.',
      by: 'By',
      parentFallbackLink: 'To parent content',
      hasChanges: 'There have been changes in this area',
      positionForGrouped: 'This %exercise_or_solution% is part of %title%.',
      helpLink: 'Revision Help'
    },
    revisionHistory: {
      changes: 'Changes',
      author: 'Author',
      date: 'Date',
      edit: 'Edit',
      editLabel: 'Create a new revision starting from this specific revision',
      view: 'Show',
      viewLabel: 'Show this revision',
      status: 'Status'
    },
    unrevisedRevisions:{
      supportLinks: 'Review support',
      guideline: 'Guideline for reviewing',
      showMoreEntities: 'Show all in %subject%',
      showMoreRevisions: 'Show %number% more…',
      newLabelText: 'new',
      newLabelNote: 'This is a new entity',
      wipLabelText: 'wip',
      wipLabelNote: 'Marked as work in progress. Do not review yet.',
      newAuthorText: 'new author',
      newAuthorNote: 'This is one of the first edits of this author, maybe prioritise this.',
      noUnrevisedRevisions: 'No unrevised revisions, all done! 🎉'
    },
    errors: {
      title: '😬 Websites make mistakes sometimes…',
      defaultMessage: 'So sorry, we ran into a problem loading this content.',
      temporary: 'The good news? The problem seems to be temporary, so please try again later.',
      permanent: 'We will see what we can do about that… ',
      typeNotSupported: 'Please try reloading this page.',
      refreshNow: 'Refresh now',
      backToPrevious: 'Back to previous page',
      backToHome: 'To our home page'
    },
    print: {
      preparingNotice: 'Preparing print!',
      warning: 'IMPORTANT: To make sure all images and formulas print, please scroll down to the end of the page once BEFORE you open this dialog. Thank you!'
    },
    profiles: {
      aboutMe: 'About me',
      recentActivities: 'Recent activities',
      showAllActivities: 'Show all activities',
      noActivities: 'No activities so far.',
      lastLogin: 'Last login',
      yearsWithSerlo: 'Years with Serlo!',
      yearWithSerlo: 'Year with Serlo!',
      roles: 'Roles',
      instanceRoles: 'Roles on %lang%.serlo.org:',
      otherRoles: 'Other roles:',
      directMessage: 'Direct message',
      goToChat: 'Go to Chat',
      registerChat: 'Register for Chat',
      inviteToChat: 'Invite to chat',
      invitation: '💬 %username% has invited you to the Serlo community chat!\nGo to %chatlink% to join.',
      inviteModal: {
        part1: '%username% is not yet active in our community chat at %chatLink%.',
        part2: 'You can invite %username% to the chat to send direct messages:',
        button: 'Send invitation',
      },
      activityGraph: {
        edits: "Edits",
        comments: "Comments",
        reviews: "Reviews",
        taxonomy: "Taxonomy",
        legendary: "💙 Just wow! 💙",
        untilNextLevel: "%amount% more to complete this circle 🎉"
      },
      howToEditImage: {
        heading: 'How to edit your profile picture',
        description: 'Currently we use the images from %chatLink% as profile pictures. In order to change your picture, do the following:',
        steps: {
          goToChat: 'Go to %chatLink%.',
          signIn: 'Sign in.',
          goToMyAccount: 'Go in the user menu to %myAccountLink%.',
          myAccount: 'My Account',
          uploadPicture: 'Upload a new picture (make sure it is square) and click "Save changes".',
          refreshPage: 'Come back here and refresh the image using %refreshLink%.',
          refreshLink: 'this link',
        }
      },
      motivation: {
        edit: 'Edit motivation',
        add: 'Add motivation',
        heading: 'How to edit your motivation',
        intro: 'Motivations are a new feature we test at the moment. To edit your motivation you have to fill out a simple form.',
        privacy: 'The form and data storage is offered by Google and personal data may be transferred to this service when using this feature.',
        toForm: 'Motivation Form'
      },
    },
    notices: {
      welcome: '👋 Welcome %username%!',
      bye: '👋 See you soon!',
      revisionSaved: 'Revision is saved and will be reviewed soon 👍',
      revisionAccepted: 'Revision was successfully accepted ✅',
      revisionRejected: 'Revision was successfully rejected ❎',
      revisionSavedAccepted: 'Revision was successfully saved and accepted ✅'
    },
    loading: {
      oneMomentPlease: 'One moment please…',
      isLoading: 'Content is loading…',
      unknownProblem: "Sorry, there was a problem loading the content, please try again later."
    },
    login: {
      pleaseLogInLink: 'Please log in',
      pleaseLogInText: 'to use this feature.'
    },
    keys: {
      ctrl: 'ctrl',
      return: 'return'
    },
    eventLog: {
      currentEvents: 'Current events',
      oldestEvents: '%amount% oldest events',
      globalDescription: 'All events that happen somewhere on %lang%.serlo.org'
    },
    events: {
      setThreadStateArchived: "%actor% archived %thread%.",
      setThreadStateUnarchived: "%actor% restored %thread%.",
      createComment: "%actor% commented in %thread%: %comment%.",
      createThread: "%actor% started %thread% on %object%.",
      createEntity: "%actor% created %object%.",
      setLicense: "%actor% changed the license of %repository%.",
      createEntityLink: "%actor% associated %child% with %parent%.",
      removeEntityLink: "%actor% dissociated %child% from %parent%.",
      createEntityRevision: "%actor% created a %revision% of %entity%.",
      checkoutRevision: "%actor% checked out a %revision% in %repository%.",
      rejectRevision: "%actor% did not accept a %revision% in %repository%.",
      createTaxonomyLink: "%actor% added %child% to %parent%.",
      removeTaxonomyLink: "%actor% removed %child% from %parent%.",
      createTaxonomyTerm: "%actor% created %term%.",
      setTaxonomyTerm: "%actor% updated %term%.",
      setTaxonomyParentDeleted: "%actor% removed the parent of %child%.",
      setTaxonomyParentChangedFrom: "%actor% changed parent of %child% from %previousparent% to %parent%.",
      setTaxonomyParentChanged: "%actor% changed parent of %child% to %parent%.",
      setUuidStateTrashed: "%actor% trashed %object%.",
      setUuidStateRestored: "%actor% restored %object%.",
      inviteToChat: "You have been invited to the Chat! %break% Go to %chatLink% to chat with %actor% and others.",
      entityPlaceholderFallback: "Content"
    },
    actions: {
      loadMore: "Load more",
    }
  }
};
export const instanceLandingData = {
  lang: 'en',
  subjectsData: landingSubjectsData,
  strings: {
    vision: 'It is our vision to enable personalized learning and provide high quality educational resources worldwide – completely free of charge. Serlo is a grassroots organization inspired by Wikipedia. We already provide thousands of articles, videos and solved exercises for five million German students every year. Now it’s time to go international.',
    learnMore: 'Learn more',
    democraticallyStructured: 'democratically structured',
    nonProfit: 'non-profit',
    transparent: 'transparent',
    openlyLicensed: 'openly licensed',
    adFree: 'ad-free',
    freeOfCharge: 'free of charge',
    wikiTitle: 'Serlo is the Wikipedia for Learning',
    wikiText: 'Just like Wikipedia, this platform is created by an engaged community of authors. Serlo Education is run and owned by decentralized teams of volunteers and professionals all over the world.',
    movementTitle: 'Become a Part of Our Movement for Open Education',
    callForAuthors: 'We are looking for teachers and enthusiastic educators who are passionate about their subject. Become part of our community to create new learning material and help us improve existing content.',
    communityLink: 'Visit the landing page for authors',
    callForOther: 'We offer a diverse range of jobs and volunteering opportunities in the fields of software development, design, translation, communications, project management and more.',
    getInvolved: 'Get involved!'
  }
};
export const serverSideStrings = {
  title: 'learn with Serlo!'
};
export const loggedInData = {
  authMenu: [{
    url: '/user/notifications',
    title: 'Notifications',
    icon: 'notifications'
  }, {
    url: '',
    title: 'User',
    icon: 'user',
    children: [{
      url: '/user/me',
      title: 'Own profile'
    }, {
      url: '/auth/password/change',
      title: 'Change password'
    }, {
      url: '/event/history/user/me',
      title: 'My Edits'
    }, {
      url: '/subscriptions/manage',
      title: 'Subscriptions'
    }, {
      url: '/api/auth/logout',
      title: 'Log out'
    }]
  }],
  strings: {
    tools: 'Other Tools',
    authorMenu: {
      log: 'Log',
      settings: 'Settings',
      moveCoursePage: 'Move this page to another course',
      thisCoursePage: 'This course-page',
      addCoursePage: 'Add course-page',
      wholeCourse: 'Whole course',
      copyItems: 'Copy items',
      moveItems: 'Move items',
      addGroupedTextExercise: 'Add grouped-text-exercise',
      changeLicense: 'Change License',
      subscribe: 'Subscribe',
      subscribeNotifications: 'Recieve notifications',
      subscribeNotificationsAndMail: 'Recieve notifications and emails',
      unsubscribeNotifications: 'Unsubscribe',
      convert: 'Convert (beta)',
      history: 'History',
      editAssignments: 'Edit topic and curriculum assignments',
      moveToTrash: 'Move to trash',
      restoreContent: 'Restore from trash',
      sortCoursePages: 'Sort course pages',
      sortGroupedExercises: 'Sort grouped Exercises',
      edit: 'Edit',
      unrevisedEdit: 'Show unrevised revisions',
      organize: 'Organize',
      moveToGroupedTextExercise: 'Move content to other grouped-text-exercise',
      moveToTextExercise: 'Move content to other text-exercise',
      sortEntities: 'Sort content',
      newEntity: 'New Entity',
      editProfile: 'Edit profile',
      directLink: 'Direct link to this content',
    },
    notifications: {
      hide: "Hide notifications for this content.",
      setToRead: "Set notification to read.",
      setAllToRead: "Set all visible to read",
      showNew: "New",
      showRead: "Read",
    },
    subscriptions: {
      mail: "E-mails",
      subscription: "Subscription",
      noMails: "deactivate",
      getMails: "activate",
      noNotifications: "cancel",
      loadedSentence: "Loaded %loadedCount% of %totalCount% subscriptions.",
      loadMoreLink: "Load more!"
    },
    revisions: {
      checkout: {
        action: 'Accept',
        title: 'Accept Revision',
        explanation: 'Please give the author some feedback.'
      },
      reject: {
        action: 'Reject',
        title: 'Reject Revision',
        explanation: 'Please tell the author why you will not accept the submission.'
      },
      confirm: 'Confirm',
      unrevisedTaxNote: 'New content, not accepted yet'
    },
    editor: {
      edtrIo: {
        extendedSettings: 'Extended Settings',
        close: 'Close',
        thisContentTypeIsnTSupportedByTheNewEditorYet:
          "This content type isn't supported by the new editor, yet.",
        editTheContentInTheOldEditor: 'Edit the content in the old editor.',
        anErrorOccurredDuringTheConversion:
          'An error occurred during the conversion.',
        weFoundAnOldRevisionCreatedByYouDoYouWantToRestoreIt:
          'We found an old revision created by you. Do you want to restore it?',
        thisEntityHasnTBeenConvertedToTheNewEditorYet:
          "This entity hasn't been converted to the new editor, yet.",
        text: 'Text',
        composeContentUsingRichTextAndMathFormulas:
          'Compose content using rich text and math formulas.',
        quotation: 'Quotation',
        createIndentedTextForQuotations: 'Create indented text for quotations.',
        geoGebraApplet: 'GeoGebra Applet',
        embedGeoGebraMaterialsAppletsViaUrlOrId:
          'Embed GeoGebra Materials applets via URL or ID.',
        sourceCode: 'Source Code',
        highlightTheSyntaxOfSourceCode: 'Highlight the syntax of source code.',
        anchor: 'Anchor',
        insertAnAnchor: 'Insert an anchor.',
        image: 'Image',
        uploadImages: 'Upload images.',
        importantStatement: 'Important Statement',
        aBoxToHighlightImportantStatements:
          'A box to highlight important statements.',
        serloOrgContent: 'serlo.org Content',
        embedSerloOrgContentViaTheirId: 'Embed serlo.org content via their ID.',
        multimediaContentAssociatedWithText:
          'Multimedia content associated with text',
        createAnIllustratingOrExplainingMultimediaContentAssociatedWithText:
          'Create an illustrating or explaining multimedia content associated with text.',
        spoiler: 'Spoiler',
        aCollapsibleBox: 'A collapsible box.',
        table: 'Table',
        createTablesUsingMarkdown: 'Create tables using Markdown.',
        video: 'Video',
        embedYouTubeVimeoWikimediaCommonsOrBrVideos:
          'Embed YouTube, Vimeo, Wikimedia Commons or BR videos.',
        solutionSeparator: 'Solution Separator',
        divideTheSolutionIntoIndividualSteps:
          'Divide the solution into individual steps.',
        save: 'Save',
        cancel: 'Cancel',
        saving: 'Saving…',
        youNeedToFillOutTheChangesYouMade:
          'You need to fill out the changes you made',
        youNeedToAcceptTheLicenseTerms: 'You need to accept the license terms',
        youNeedToFillOutTheChangesYouMadeAndAcceptTheLicenseTerms:
          'You need to fill out the changes you made and accept the license terms',
        anErrorOccurredDuringSaving: 'An error occurred during saving.',
        youCanStoreTheRevisionLocallyRefreshThePageAndTryToSaveAgain:
          'You can store the revision locally, refresh the page and try to save again.',
        revisionSaved: 'Revision saved',
        saveRevision: 'Save revision',
        changes: 'Changes',
        skipPeerReviewNotRecommended: 'Skip peer review (not recommended)',
        enableSerloOrgNotifications: 'Enable serlo.org notifications',
        enableNotificationsViaEMail: 'Enable notifications via e-mail',
        switchToAnotherRevision: 'Switch to another revision',
        current: 'Current',
        author: 'Author',
        createdAt: 'Created at',
        settings: 'Settings',
        termsAndEquations: 'Terms and equations',
        writeTermManipulationsAndSolveMultilineEquations:
          'Write term manipulations and solve multiline equations.',
      },
      anchor: {
        identifier: 'Identifier',
        idOfTheAnchor: 'ID of the anchor',
      },
      geogebra: {
        geoGebraUrlOrId: 'GeoGebra URL or ID',
      },
      highlight: {
        clickHereAndEnterYourSourceCode:
          'Click here and enter your source code…',
        enterYourSourceCodeHere: 'Enter your source code here',
        language: 'Language',
        enterLanguage: 'Enter language',
        showLineNumbers: 'Show line numbers',
      },
      inputExercise: {
        text: 'Text',
        chooseTheExerciseType: 'Choose the exercise type',
        unit: 'Unit',
        addAnswer: 'Add answer',
        enterTheValue: 'Enter the value',
        yourSolution: 'Your solution',
        correct: 'Correct',
        wrong: 'Wrong',
        numberExactSolution:
          "Number (exact solution, e.g. '0,5' ≠ '1/2' ≠ '2/4')",
        mathematicalExpressionEquivalentSolution:
          "Mathematical expression (equivalent solution, e.g. '0,5' = '1/2' = '2/4')",
      },
      multimedia: {
        image: 'Image',
        video: 'Video',
        geoGebraApplet: 'GeoGebra Applet',
        changeTheMultimediaType: 'Change the multimedia type',
        howImportantIsTheMultimediaContent:
          'How important is the multimedia content?',
        itIsIllustrating: 'It is illustrating',
        itIsEssential: 'It is essential',
      },
      rows: {
        searchForTools: 'Search for tools…',
        duplicate: 'Duplicate',
        remove: 'Remove',
        close: 'Close',
        dragTheElementWithinTheDocument: 'Drag the element within the document',
        addAnElement: 'Add an element',
      },
      scMcExercise: {
        singleChoice: 'Single-choice',
        multipleChoice: 'Multiple-choice',
        chooseTheExerciseType: 'Choose the exercise type',
        addAnswer: 'Add answer',
        wrong: 'Wrong',
        almostYouMissedAtLeastOneCorrectAnswer:
          'Almost! You missed at least one correct answer',
        correct: 'Correct',
      },
      spoiler: {
        enterATitle: 'Enter a title',
      },
      text: {
        quote: 'Quote',
        setColor: 'Set color',
        resetColor: 'Reset color',
        colors: 'Colors',
        closeSubMenu: 'Close sub menu',
        heading: 'Heading',
        headings: 'Headings',
        linkStrgK: 'Link (Strg + K)',
        enterUrl: 'Enter URL',
        openInNewTab: 'Open in new tab',
        orderedList: 'Ordered list',
        unorderedList: 'Unordered list',
        lists: 'Lists',
        mathFormulaStrgM: 'Math formula (Strg + M)',
        displayAsBlock: 'Display as block',
        formula: '[formula]',
        visual: 'visual',
        laTeX: 'LaTeX',
        onlyLaTeXEditorAvailable: 'Only LaTeX editor available',
        shortcuts: 'Shortcuts',
        fraction: 'Fraction',
        superscript: 'Superscript',
        or: 'or',
        subscript: 'Subscript',
        root: 'Root',
        mathSymbols: 'Math symbols',
        eG: 'e.g.',
        functions: 'Functions',
        boldStrgB: 'Bold (Strg + B)',
        italicStrgI: 'Italic (Strg + I)',
        noItemsFound: 'No items found',
      },
      video: {
        videoUrl: 'Video URL',
        description: 'Description',
        title: 'Title',
        url: 'URL',
        titleForSearchEngines: 'Title for search engines',
      },
      error: {
        thisPartOfTheDocumentCouldNotBeConverted:
          'This part of the document could not be converted.',
      },
      exercise: {
        addChoiceExercise: 'Add choice exercise',
        choiceExercise: 'Choice exercise',
        addInputExercise: 'Add input exercise',
        inputExercise: 'Input exercise',
        addAnOptionalInteractiveExercise:
          'Add an optional interactive exercise:',
      },
      injection: {
        illegalInjectionFound: 'Illegal injection found',
        serloEntitySrc: 'Serlo entity {{src}}',
        serloId: 'Serlo ID:',
      },
      layout: {
        toMakeTheContentDraggableConvertThemForTheNewEditor:
          'To make the content draggable, convert them for the new editor:',
        oneColumnLayout: 'One-column layout',
        multimediaContentAssociatedWithText:
          'Multimedia content associated with text',
      },
      solution: {
        optionallyExplainTheSolutionStrategyHere:
          'Optionally explain the solution strategy here',
        forThisExerciseYouNeedTheFollowingFundamentals:
          'For this exercise, you need the following fundamentals:',
        idOfAnArticleEG_1855: 'ID of an article, e.g. 1855',
        openTheArticleInANewTab: 'Open the article in a new tab:',
        titleOfTheLink: 'Title of the link',
        showSolution: 'Show solution',
        hideSolution: 'Hide solution',
      },
      applet: {
        titleForSearchEngines: 'Title for search engines',
        descriptionForSearchEngines: 'Description for search engines',
        title: 'Title',
      },
      article: {
        titleForSearchEngines: 'Title for search engines',
        descriptionForSearchEngines: 'Description for search engines',
        title: 'Title',
        writeAShortIntroduction: 'Write a short introduction',
        exercises: 'Exercises',
        dragTheExercise: 'Drag the exercise',
        removeExercise: 'Remove exercise',
        addOptionalExercise: 'Add optional exercise',
        stillWantMore: 'Still want more?',
        youCanFindMoreContentOnThisTopicHere:
          'You can find more content on this topic here',
        articles: 'Articles',
        addArticle: 'Add article',
        idOfAnArticleEG_1855: 'ID of an article, e.g. 1855',
        openTheArticleInANewTab: 'Open the article in a new tab:',
        dragTheArticle: 'Drag the article',
        courses: 'Courses',
        addCourse: 'Add course',
        idOfACourseEG_51979: 'ID of a course, e.g. 51979',
        openTheCourseInANewTab: 'Open the course in a new tab:',
        dragTheCourse: 'Drag the course',
        videos: 'Videos',
        addVideo: 'Add video',
        idOfAVideoEG_40744: 'ID of a video, e.g. 40744',
        openTheVideoInANewTab: 'Open the video in a new tab:',
        dragTheVideo: 'Drag the video',
        titleOfTheLink: 'Title of the link',
        sources: 'Sources',
        urlOfTheLink: 'URL of the link',
        openTheLinkInANewTab: 'Open the link in a new tab:',
        dragTheSource: 'Drag the source',
        addSource: 'Add source',
        youCanFindMoreExercisesInTheFollowingFolder:
          'You can find more exercises in the following folder',
        idOfAnExerciseFolderEG_30560: 'ID of an exercise folder, e.g. 30560',
        openTheExerciseFolderInANewTab:
          'Open the exercise folder in a new tab:',
      },
      coursePage: {
        explanation: 'Explanation',
        video: 'Video',
        question: 'Question',
        title: 'Title',
      },
      course: {
        descriptionForSearchEngines: 'Description for search engines',
        title: 'Title',
        removeCoursePage: 'Remove course page',
        addCoursePage: 'Add course page',
      },
      event: {
        titleForSearchEngines: 'Title for search engines',
        descriptionForSearchEngines: 'Description for search engines',
        title: 'Title',
      },
      page: {
        title: 'Title',
      },
      taxonomy: {
        title: 'Title',
      },
      textExerciseGroup: {
        removeExercise: 'Remove exercise',
        addExercise: 'Add exercise',
        kindOfExerciseGroup: 'Kind of exercise group',
        notCohesive: 'not cohesive',
        cohesive: 'cohesive',
      },
      textExercise: {
        removeSolution: 'Remove solution',
        createSolution: 'Create solution',
      },
      equations: {
        leftHandSide: 'left-hand side',
        transformation: 'transformation',
        mode: 'Mode',
        transformationOfEquations: 'Transformation of equations',
        transformationOfTerms: 'Transformation of terms',
        addNewRow: 'Add new row',
        explanation: 'Explanation',
        term: 'Term',
        rightHandSide: 'right-hand side',
        combineLikeTerms: 'Combine like terms.',
        setTheTermsEqualToEachOther: 'Set the terms equal to each other.',
      },
      mathPuzzle: {
        sourceCode: 'Source code',
      },
      deprecated: {
        unsupported:
          'This part of the document contains features that are no longer supported.',
      },
    },
  }
};
