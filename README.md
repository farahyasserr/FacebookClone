# FacebookClone

This is a facebook clone task for Breadfast.

Steps to run the project:

- Clone the project using:
  git clone -b dev git@github.com:farahyasserr/FacebookClone.git

- Run the following command after clone is finished to install node-modules and pods:
      - npm install && cd ios && pod install && cd ..


Then use these commands to run android and ios:
- Yarn ios
- Yarn android   OR  source ~/.bash_profile && npx react-native run-android;



Things included in this Task:
- Creating a post input and whole container (What's on your mind?) (UI only)
- A component that allows also the user to post Reels, Rooms, Group, or start a Live video.
- Top panel which is implemented as a Tab View and includes the following as UI only:
     -**Stories tab** that includes: 
          - List of some stories posted by friends or pages that the user can be following
          - A component for creating a new story that includes the profile picture of the user and a plus icon to create a story
     - **Reels tab** that includes: 
          - List of Reels posted by friends or other pages with the number of views shown at the bottom of the (supposedly) video
          - A component for creating a new reel
     - Rooms tab that is "coming soon" (can be implemented in the future)
- Timeline of the Home screen that consists of a list of posts
- Each post includes:
     - Name of the user
     - Profile Icon
     - Date of the post
     - Post scope (Whether public or for friends only)
     - The message of the post
     - Image (if the post has one)
     - A blue circle around profile icon indicating that this user has a story

- Posts also include the settings area where in future the user can use them to report, hide, save a post ..etc
- Posts include an interaction panel that has a like, comment, and share UI 
- Like component is animatable and interactive (Creates an animation and turns blue when pressed)



Things not included in this task:
- No API calls
- No store created (Redux not used so far)
- No navigation yet since it's only one screen
- No functionality for comment and share buttons.
