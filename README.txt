This project was created by the LIT lab to try and develop a project to help members of the Defenders clinic practice making courtroom objections.

The premise is relatively straightforward.  Individuals would watch a video and throughout the video would make an objection.  The website would then decide if the objection was correct or incorrect.  If correct, then the app would say "sustained."  If an incorrect objection was made to an objectionable question, the app would say "overrulled, but a XXXX objection would have been sustained.  And if a incorrect objection was made to a non-objectionable question, than the website would simply say "overruled."  Any youtube video can be used for this app, and we have been using law and order videos and clips of movies.  Court tv you tube videos were going to be our next project.

Currently, the webstie recognizes these objections:
irrelevant
hearsay
speculative
argumentative
leading
repetitive

Each video requires the user to mark in the video.js when each objection is made like so:

{url:"X7KoVUspHys",
                objections:[
                              {seconds:26,type:"hearsay"},
                              {seconds:118,type:"hearsay"},
                              {seconds:128,type:"leading"},
                            ]},


This project is now going on haitus until another lit fellow begins to work on it.  Essentially, this is how far we got:

Three videos got updated.  We were hoping to have a faculty member or someone who specializes in evidence comment on this project.  To that end, we made word document scripts that could be more understandable to individuals without coding background.  I left many of the ones I worked on in the scripts folder as examples.

Our main issues were that it was difficult to find video clips that have natural pausing that would allow a user to make objections.

I also made an information tab to describe to users what the types of objections were, but did not have time to add information to this page.

A "counter" of right objection and wrong objections were added, but the counter does not remain when users switch to new videos.

I attempted to list issues in guthub issues tab, but this project was very early in development and frankly needs substantial work to get to MVP

Our hope was to add more videos from youtube and ensure that an evidence proffesor thinks of the project and could potentially give us more guidance.  