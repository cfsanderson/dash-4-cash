# Dash 4 Cash
This app was created as the final project for my course in Front-End Engineering at The Iron Yard in St. Petersburg, FL.

##TODO / Task List

###General
- [x] page automatically scrolls to the top of a page when changing pages
- [ ] close navbar with click anywhere OUTSIDE the nav.

###Home Page
- [ ] backdoor for people who don't have Strava or maybe some other type of login? (especially for Demo Day)
- [x] after login with Strava direct users to Profile page.

####Home Page Stretch Goals...
- [ ] add progress indicators (dots?)
- [ ] Parallax effect on home page?

###Profile Pages
- [ ] style for displaying MyStats
  - [ ] separate/distinguish the info groups
  - [ ] style "today" stats bigger/better
- [x] Donate button that brings up DonateModal
- [ ] Add a button to go to MyGroups?
- [ ] separate donation modules for
  - [ ] profile page (showing my TOTAL donations & my group's TOTAL donations)
  - [ ] group page (showing my total donations TO THAT GROUP and the TOTAL DONATIONS OF THAT GROUP - sorry for shouting)

###My Groups Pages
- [x] # of current members displayed in each segment
- [x] Add members button
- [x] style input field to create new Groups
- [x] increment the number of members as they are added
- [ ] better instruction text for how to start a new group.
- [ ] style group links

###Individual Group Pages
- [x] basic style for leaderboard and make as a component
- [x] Group name in header
- [ ] button to delete a group.
- [ ] add Members button.
- [ ] profile pics in leaderboard, if no pic then display "fa-user-o"

###Add Members modal
- [ ] better text
- [ ] functional?

###Donate modal
- [ ] populate "Choose a Group" drop-down selector with groups that the user is in
- [ ] Styling for the group drop-down selector (not showing up on iPad or mobile)

###CreateNewGroup modal
- [x] empty form after creating a group
- [x] prevent yellow active glow
- [ ] option to delete a group?

###InnerFooter
- [x] style similar to main footer
- [x] stick to bottom of page

###About Pages
- [ ] compelling content text "start with why"
- [ ] basic styling
  - [ ] 2 column chunks on screens wider than 640
  - [ ]

###Contact
- [ ] compelling content text
- [ ] basic email form and social media stuff?

###Help
- [ ] compelling content text
- [ ] breadcrumbs for
  - [ ] create a group
  - [ ] delete a group
  - [ ] make a donation

###Database schema
- [x] users can start groups
- [x] users can own groups
- [x] each group has one owner
- [x] each owner can have many groups
- [ ] each group has many users
- [ ] each user can have many groups
- [ ] users can make donations
- [ ] each user can have many charities
- [ ] each user can donate to many groups
- [ ] each group can

- [ ] if a member of a group wins their weekly "dash" the total given to the group for that week goes to the charity of their choice.
