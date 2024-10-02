
# Project Structure

## Project Structure Overview
All the application's source files, assets, and components are in the `App` folder, which can be found within the `packages/legacy/core/App` directory from the root folder.

```
packages/legacy/core/App/
|─ assets/                    # Contains static resources like images, fonts, and stylesheets
|─ components/                # Organized UI components, divided into subdirectories based on functionality
|─ configs/                   # Centralized configuration settings
|─ contexts/                  # Global state management using React's Context API to simplify data flow
|─ hooks/                     # Custom React hooks to abstract and reuse stateful logic across components
|─ localization/              # Language resources for internationalization, supporting multiple languages
|─ navigators/                # Manages routing/navigation for screen flow
|─ screens/                   # React components representing screens
|─ services/                  # Service functionalities (secure storage, centralized logging)
|─ types/                     # TypeScript types for data structure consistency and type checking
|─ utils/                     # Utility functions for common tasks and data processing
|─ animated-components.ts     # Animated components to be reused throughout the application
|─ constants.ts               # Stores constant values used across the app
|─ defaultConfiguration.ts    # Default configurations and setup for the app
|─ index.ts                   # Main entry point for exporting all components, utilities, and services
└─ theme.ts                   # Application-wide theme settings and styles
```

### Assets

```
packages/legacy/core/App/assets
|─  oca-bundles.json          # JSON file likely related to Open Credential Architecture (OCA)
|─ fonts/                     # Contains font files used in the app 
    |─ MaterialIcons.ttf      # Font file used for displaying material icons
|─ icons/                     # Contains SVG icons for UI elements
    └─ large-arrow.svg        # SVG icon representing a large arrow
|─ img/                       # Contains various images and illustrations for the app
    |─ about-credential.svg  
    |─ about-ui.svg  
    |─ activity-indicator-circle.svg  
    └─ wallet.svg 
```

### Components

The `components/` folder contains all the React components used across the application. These components are divided into subfolders based on their functionality, ensuring modularity and ease of maintenance.

- **`animated/`**: This subfolder contains animated components used to display loading indicators or transition effects in the UI.
```
components/animated/
|─ ButtonLoading.tsx          # Displays a loading animation for buttons
|─ ConnectionLoading.tsx      # Loading animation for connection establishment
|─ CredentialAdded.tsx        # Animation indicating a credential has been added
|─ CredentialPending.tsx      # Shows pending state with animation for a credential
|─ LoadingIndicator.tsx       # General loading spinner
|─ RecordLoading.tsx          # Animation for loading record data
|─ SendingProof.tsx           # Animation for sending proof process
└─ SentProof.tsx              # Animation indicating proof has been sent
```

- **`buttons/`**: This folder holds various button components used for navigation and action handling throughout the app.
```
components/buttons/
|─ Button.tsx              # Generic button for reusable actions
|─ HeaderButton.tsx        # Button displayed in the header section
|─ HeaderHome.tsx          # Home button in the header
|─ index.ts                # Entry point for button exports
|─ InfoIcon.tsx            # Information icon button
└─ SettingsMenu.tsx        # Button for accessing the settings menu
```

- **`chat/`**: Components related to chat features, including message bubbles and input fields.
```
components/chat/
|─ ActionSlider.tsx      # Slider for choosing actions in chat
|─ ChatActions.tsx       # Displays available chat actions
|─ ChatBubble.tsx        # Single chat message bubble
|─ ChatEvent.tsx         # Handles chat-related events
|─ ChatMessage.tsx       # Represents a chat message structure
|─ index.ts              # Entry point for chat components
└─ MessageInput.tsx      # Input field for typing messages
```

- **`inputs/`**: Input components that handle various types of data input, such as checkboxes, text fields, and PIN input fields.
```
components/inputs/
|─ CheckBoxRow.tsx          # Checkbox input in a row layout
|─ LimitedTextInput.tsx     # Text input with character limit
|─ PINInput.tsx             # Input field for entering a PIN code
└─ SingleSelectBlock.tsx    # Single-select input block
```

- **`listItems/`**: Components for displaying items in a list format, such as contacts and notifications.
```
components/listItems/
|─ ContactListItem.tsx          # Represents a contact in a list
└─ NotificationListItem.tsx     # Represents a notification in a list
```

- **`misc/`**: Contains miscellaneous components that don’t fit into specific categories but are important for various functionalities in the app.
```
components/misc/
|─ ActivityLogLink.tsx      # Link to activity log
|─ AvatarView.tsx           # Displays user avatars
|─ BLEScanner.tsx           # Bluetooth Low Energy (BLE) scanner
|─ CardWatermark.tsx        # Watermark for credential cards
|─ ConnectionAlert.tsx      # Alert for connection issues
|─ ConnectionImage.tsx      # Displays images related to connections
|─ ContentGradient.tsx      # Gradient effect for content views
|─ CredentialCard.tsx       # Credential details in card format
|─ EmptyList.tsx            # Display for empty lists
|─ Pagination.tsx           # Pagination component for lists
|─ QRRenderer.tsx           # Renders QR codes
└─ QRScanner.tsx            # QR code scanner
```

- **`modals/`**: Modal components used to display pop-ups and alerts across the application.
```
components/modals/
|─ AlertModal.tsx           # Modal for displaying alerts
|─ CommonRemoveModal.tsx    # Modal for removal confirmations
|─ ErrorModal.tsx           # Displays error messages in a modal
|─ ImageModal.tsx           # Modal for viewing images
└─ PopupModal.tsx           # Generic popup modal
```

- **`network/`**: Components related to network status and connectivity information.
```
components/network/
└─ NetInfo.tsx            # Displays network information and connectivity status
```

- **`record/`**: Components that manage and display data records, including fields and headers.
```
components/record/
|─ Record.tsx             # Main record display component
|─ RecordBinaryField.tsx  # Displays binary fields in a record
|─ RecordFooter.tsx       # Footer component for records
|─ RecordHeader.tsx       # Header component for records
└─ RecordRemove.tsx       # Component to remove a record
```

- **`texts/`**: Text and label components used for displaying different types of text across the app.
```
components/texts/
|─ HeaderTitle.tsx        # Header title text
|─ HighlightTextBox.tsx   # Text box with highlighted content
|─ Label.tsx              # Generic label component
|─ Link.tsx               # Clickable link component
└─ Title.tsx              # Title text component
```

- **`toast/`**: Toast notification components that display transient messages.
```
components/toast/
|─ BaseToast.tsx           # Base toast component
└─ ToastConfig.tsx         # Toast configuration
```

- **`tour/`**: Components related to the tour or step-by-step walkthroughs in the app.
```
components/tour/
|─ CredentialOfferTourSteps.tsx  # Steps for offering credentials during tour
|─ HomeTourSteps.tsx             # Steps for home screen tour
|─ SpotCutout.tsx                # Highlights specific elements during tour
└─ TourOverlay.tsx               # Overlay for tour walkthrough
```

- **`views/`**: Contains components related to layout sections of the app, such as headers and footers.
```
components/views/
|─ HomeFooterView.tsx      # Footer view for the home screen
|─ HomeHeaderView.tsx      # Header view for the home screen
|─ LoadingView.tsx         # Loading screen view
└─ SafeAreaScrollView.tsx  # Scroll view with safe area support
```

This structure provides a clear and organized overview of the `components/` folder. Each subfolder serves a specific purpose, contributing to the modularity and maintainability of the application.

### Configs

The `configs/` folder contains the configuration files necessary for managing different parts of the application's setup, particularly focused on ledger management and testing.

- **`ledgers/`**: This subfolder holds configurations related to ledger management. In this case, it specifically focuses on `indy` ledger technology. It also includes mock data used for testing purposes.
```
configs/ledgers/
|─ indy/
    |─ index.ts             # Main index file for the Indy ledger configuration
    |─ ledgers.json         # JSON file containing ledger configurations
    └─ __mocks__/           # Contains mock data used for testing
        |─ index.ts         # Mock index file for testing purposes
        └─ fixtures/
            └─ sovrin-main-net-pool.json  # Mock fixture for the Sovrin main net pool
```

### Contexts

The `contexts/` folder contains files that handle the global state management of the application using React’s Context API. It provides a centralized way to manage various application states such as authentication, network, configuration, and theme.

```
contexts/
|─ animated-components.ts    # Manages the state of animated components across the app
|─ auth.tsx                  # Handles authentication context for managing user login state
|─ commons.tsx               # Common context shared across multiple components
|─ configuration.tsx         # Stores global configuration data accessible throughout the app
|─ index.ts                  # Main entry point for exporting all context files
|─ network.tsx               # Handles the network state, including connectivity status
|─ store.tsx                 # Context for managing application-level store and state
|─ theme.ts                  # Manages theme state for handling dark/light modes and other theme settings
|─ reducers/                 # Folder for reducers, which handle state updates
    |─ index.ts              # Combines all reducers for managing state changes
    └─ store.ts              # Reducer handling updates to the global store
└─ tour/                     # Folder for managing tour-related contexts
    |─ tour-context.tsx      # Manages state for the application's tour steps
    └─ tour-provider.tsx     # Provides the context for managing the tour state
```

#### Breakdown of Key Files and Subfolders:

1. `animated-components.ts`: Manages the state of animated components across the app, such as loading indicators or transitions.
2. `auth.tsx`: Responsible for managing authentication states, including user login and session handling.
3. `commons.tsx`: Provides shared context that can be used across multiple components, facilitating common state management.
4. `configuration.tsx`: Stores and manages the global configuration settings, making them accessible throughout the application.
5. `index.ts`: The main entry point for exporting all context-related files, allowing them to be easily imported elsewhere in the app.
6. `network.tsx`: Tracks the network status, such as online/offline state and network connectivity issues.
7. `store.tsx`: Manages the global state of the application, acting as a centralized store for all state data.
8. `theme.ts`: Responsible for managing the theme (dark/light mode) of the application, enabling a consistent look and feel across components.

#### Reducers Folder

- `reducers/index.ts`: Combines all the reducers, which are responsible for handling changes to the global state.
- `reducers/store.ts`: A specific reducer that updates the application’s global store based on actions dispatched by components.

#### Tour Context Folder

- `tour/tour-context.tsx`: Manages the state related to the application's tour, including the steps a user needs to follow.
- `tour/tour-provider.tsx`: Provides the context for managing and updating the tour state across different components.

This structure ensures that global state management is centralized and accessible across the entire application, allowing for a more maintainable and scalable solution.

### Hooks

The `hooks/` folder contains custom React hooks designed to abstract and reuse stateful logic across components. These hooks help manage different application functionalities, such as connections, credentials, and notifications.

```
hooks/
|─ connections.ts             # Manages connection-related logic in the app
|─ credentials.ts             # Handles logic related to managing credentials
|─ deep-links.ts              # Manages deep link navigation and logic
|─ notifications.ts           # Handles notification logic across the app
|─ proof-request-templates.ts # Manages templates for proof requests
└─ proofs.ts                  # Manages proof-related logic and processes
```

### Localization

The `localization/` folder manages the language resources for internationalizing the application. This structure supports multiple languages, making the app accessible to a wider audience.

```
localization/
|─ index.ts           # Main index file for exporting language configurations
|─ en/                # Folder containing English translations
    └─ index.ts       # English translation file
|─ fr/                # Folder containing French translations
    └─ index.ts       # French translation file
└─ pt-br/             # Folder containing Brazilian Portuguese translations
    └─ index.ts       # Brazilian Portuguese translation file
```

### Navigators

The `navigators/` folder manages the routing and navigation within the application. Each file defines a navigation stack that controls the flow between different screens in the app.

```
navigators/
|─ AuthenticateStack.tsx      # Stack for handling authentication-related navigation
|─ ConnectStack.tsx           # Stack for managing connections navigation flow
|─ ContactStack.tsx           # Stack for navigating between contact-related screens
|─ CredentialStack.tsx        # Stack for managing credential-related navigation
|─ defaultStackOptions.tsx    # Default options for configuring all navigation stacks
|─ DeliveryStack.tsx          # Stack for managing delivery-related screens
|─ HomeStack.tsx              # Stack for navigating through the home screens
|─ NotificationStack.tsx      # Stack for managing notification-related screens
|─ ProofRequestStack.tsx      # Stack for navigating through proof request screens
|─ RootStack.tsx              # Root stack that brings together all the other navigation stacks
|─ ServiceContactStack.tsx    # Stack for navigating through service contact-related screens
└─ SettingStack.tsx           # Stack for managing settings-related navigation
```

### Screens

The `screens/` folder contains the React components that represent each screen in the application. Each file encapsulates the layout, interaction, and styling seen by the user on that specific screen.

```
screens/
|─ AttemptLockout.tsx          # Screen shown when too many failed login attempts occur
|─ Chat.tsx                    # Chat screen for messaging functionality
|─ Connection.tsx              # Screen for managing connections
|─ ContactDetails.tsx          # Screen displaying contact details
|─ CredentialDetails.tsx       # Screen showing detailed information of a credential
|─ CredentialOffer.tsx         # Screen for offering a credential
|─ CredentialOfferAccept.tsx   # Screen for accepting a credential offer
|─ DataRetention.tsx           # Screen for managing data retention settings
|─ Developer.tsx               # Developer screen for accessing developer tools or features
|─ Home.tsx                    # Home screen of the application
|─ Language.tsx                # Screen for selecting the language of the app
|─ ListContacts.tsx            # Screen for listing all contacts
|─ ListCredentials.tsx         # Screen displaying a list of all credentials
|─ ListProofRequests.tsx       # Screen for listing proof requests
|─ Maps.tsx                    # Screen for displaying maps
|─ NameWallet.tsx              # Screen for naming the user's wallet
|─ Notification.tsx            # Screen for managing notifications
|─ Onboarding.tsx              # Main onboarding screen for new users
|─ OnboardingPages.tsx         # Pages for the onboarding process
|─ PINCreate.tsx               # Screen for creating a PIN
|─ PINEnter.tsx                # Screen for entering a PIN
|─ Preface.tsx                 # Introductory screen or preface for the app
|─ ProofChangeCredential.tsx   # Screen for changing a credential in the proof flow
|─ ProofDetails.tsx            # Detailed screen for proofs
|─ ProofRequest.tsx            # Screen for making a proof request
|─ ProofRequestAccept.tsx      # Screen for accepting a proof request
|─ ProofRequestDetails.tsx     # Detailed view of a proof request
|─ ProofRequesting.tsx         # Screen showing proof requesting progress
|─ ProofRequestUsageHistory.tsx# Screen for viewing the usage history of a proof request
|─ QRCodeGen.tsx               # Screen for generating QR codes
|─ RenameContact.tsx           # Screen for renaming a contact
|─ Scan.tsx                    # Screen for scanning QR codes
|─ ScanBLE.tsx                 # Screen for scanning Bluetooth Low Energy (BLE) devices
|─ ScanHelp.tsx                # Help screen for scanning-related issues
|─ SelectProofRequest.tsx      # Screen for selecting a proof request
|─ Settings.tsx                # Screen for managing app settings
|─ Splash.tsx                  # Splash screen shown when the app is launching
|─ Terms.tsx                   # Screen displaying terms and conditions
|─ Tours.tsx                   # Screen for managing app tours or walkthroughs
|─ UseBiometry.tsx             # Screen for enabling or disabling biometric authentication
└─ WhatAreContacts.tsx         # Informational screen explaining what contacts are
```

### Services

The `services/` folder provides specific functionalities as services, such as secure storage handling and centralized logging, which are essential for maintaining security and diagnosing issues within the application.

```
services/
|─ keychain.ts      # Manages secure storage of sensitive data
└─ logger.ts        # Centralized logging service for tracking application events and errors
```

### Types

The `types/` folder defines TypeScript types and interfaces that ensure consistent data structures and facilitate type checking across the application. This promotes reliable and safe code by catching potential type-related errors early.

```
types/
|─ chat.ts                  # Types related to chat features
|─ credential-status.ts     # Defines types for managing credential statuses
|─ decline.ts               # Types for handling decline actions in the app
|─ error.ts                 # Type definitions for error handling
|─ fn.ts                    # Defines function-related types
|─ genesis.ts               # Types for managing genesis files and configurations
|─ index.ts                 # Entry point for exporting all type definitions
|─ metadata.ts              # Types for managing metadata in the app
|─ navigators.ts            # Type definitions related to navigation stacks
|─ permissions.ts           # Types for managing permissions and access control
|─ proof-items.ts           # Types for handling proof items and their structure
|─ react-i18next.d.ts       # Type definitions for localization using react-i18next
|─ remove.ts                # Types for managing removal actions in the app
|─ security.ts              # Defines types related to security features
|─ settings.ts              # Type definitions for app settings
|─ state.ts                 # Types for managing application state
└─ tour.ts                  # Types for handling app tours and walkthroughs
```

### Utils

The `utils/` folder contains utility functions and helpers that provide widely used functionalities throughout the application. These utilities help in data processing, performing calculations, handling cryptography, and other tasks that are not directly tied to the UI.

```
utils/
|─ agent.ts                   # Utility functions for managing agents
|─ cred-def.ts                # Utilities related to credential definitions
|─ credential.ts              # Functions for handling credentials
|─ crypto.ts                  # Cryptographic functions for encryption and decryption
|─ helpers.ts                 # General helper functions used across the app
|─ invitation.ts              # Utilities for handling invitation creation and management
|─ ledger.tsx                 # Functions for interacting with the ledger
|─ luminance.ts               # Utility for managing luminance and color-related operations
|─ migration.ts               # Functions to handle data migrations
|─ oca.ts                     # Utilities for Open Credential Architecture (OCA) management
|─ PINCreationValidation.ts   # Utility for validating PIN creation and management
|─ proofBundle.ts             # Functions for handling proof bundles
|─ schema.ts                  # Utility for handling schemas within the app
└─ testable.ts                # Testable utility functions for development and debugging
```
