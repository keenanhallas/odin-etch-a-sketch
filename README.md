# odin-etch-a-sketch

## Etch-a-sketch project for the Odin Project foundations course

### Project Goals:

I forgot to type up this readme before completing the project, but I will still lay out the goals that I had in mind below, for future reference:

- Practice DOM tree creation & alterations through Javascript, rather than typing vanilla HTML
- Practice applying styling through use of DOM methods, in addition to typing CSS
- Refresh my foundational knowledge of Flexbox, to create a grid of divs that size & align themselves perfectly within their parent container
- Continue to practice using event listeners to add interactivity to a webpage
- Get additional experience using a problem solving framework to approach the task at hand, including taking time to fully understand the problem, and using pseudocode
- Proper organization of code, separation of concerns, and breaking the program down into smaller chunkd/functions where appropriate
- More practice googling to find out how to do things I haven't done before or need a refresher on

### After-thoughts

Below are some things I realized I would like/need to focus on moving forward. Some of these things will likely be developed as I go through the Odin Project, or simply over time, but I feel that they are worth noting.

- What are proper CSS units to use in different situations? I used vw in this program to ensure that the grid cells were a consistent percentage of the grid, but I have no idea if there are other/better solutions for this.
- When trying to insert line breaks for readability of CSS declarations in Javascript (for example in setAttribute("style", `code here`)), I was running into syntax errors when lines would end on a semi-colon. I was trying to break the lines at the end of each CSS declaration, which seemed to be causing this. I need to figure out why exactly this is and either a workaround or a better way to do this in the future.
- What is the best way to set style on dynamically created nodes? Is there a way to create CSS classes dynamically and apply them in real time? Generally in-line styles are frowned upon, but this was the only way I could think of styling the nodes when I was creating them dynamically in the context of a loop. I could create a CSS class and apply that to each element as I create it, but I was trying to do the full styling through JS. Maybe that's not the way to do it generally. It was good practice at least.

### Next Steps

At some point, I would like to accomplish some/all of the following ideas in order to take this project beyond where it currently is and further develop my skills:

- Create a color selector drop-down menu, including an reference color swatch for each option. Perhaps even a full-on color picker would be nifty to include
- Make the drawing process include some sort of function to slowly darken the cells as you pass over them multiple times, going from light to fully saturated color. Perhaps even multiple "brushes" could be included in a drop down that darken the cells at different rates, simulating different pressures.
- Create a mode where the user only draws when they have their mouse button held down. This would take the program out of the realm of Etch-a-sketch, but would be a cool function to implement. Perhaps I could even start a new repo from the ground up with this "drawing application" approach in mind?
- Any and all of these things would be a perfect opportunity to practice branching and working on new features, while leaving my current code intact.