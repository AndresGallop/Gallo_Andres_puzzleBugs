# My Awesome Drag and Drop Project
# Fixing bugs in the puzzle
The puzzle has two bugs, the first one is that when user clicks the puzzle selector, it should reset the pieces to their otiginal position and the second one is that the drop zones allow more tha two pieces when they actually shouldn't allow that.


Reset puzzle:

So my idea is to create a function that remove the child (pieces) from the dropzones. I will use removeChild() for that.  
