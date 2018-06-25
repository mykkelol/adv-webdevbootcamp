/* global d3 */
/*
    D3 Selections:     
        + d3.select
            - a single element
            
        + d3.selectAll
            - multiple elements

    D3 Selections Manipulation
        + selection.style(property, value) // ('color', 'blue')
        + selection.attr(attribute, value) // ('class', 'container')
        + selection.text(value) // to manipulate text
        + selection.html(value) // to manipulate innerHTML
        + selection.classed('new-class', true) // true or false to create new class or remove class for selected element
        
    D3 Node
        + allows the access to underlying HTML element inside of a D3 selection
        + in D3, we like to chain properties. With .node(), we are given the underlying HTML
        and with .nodes(), we are given an array of matching HTML; see code
        
    D3 Event Listener; see code
*/

/*
    D3 Callback:
        function(__, index){}
*/
        // Example 1 (callback that randomizes the size of all li element):
            d3.selectAll('li')
                .style('font-size', function(){
                    return Math.random() * 40 + "px"; 
                });
        
        // Example 2 (callback that manipulates only even li):
            d3.selectAll('li')
                .style('background-color', function(_, i){
                    return i % 2 === 0 ? "yellow" : "white";
                });
                
        // Example 3 (chained selects, like promise):
            d3.select('.outer')
        		.style('background-color','purple')
        	.select('div')
        		.style('background-color','blue')
        	.select('div')
        		.style('background-color','red')
        
/*
    D3 .node(), .nodes()
*/
        // Example 1: .node()
            d3.select('li').node();
                // <li>....blah blah blah...</li>
        // Example 2: .nodes()
            d3.select('li').nodes();
                // [li]
        	    
/*
    D3 Event Listener
        + selection.on(eventType, callback)
        + selection.on(eventType, null)
            - will remove the event that was added to the selected the event
*/        	    

            // Click event
            d3.select('h1')
                .on('click', function(){
                    console.log('hello!');
                });
            
            // Clearing events by setting it to null
            d3.select('h1')
                .on('click', null);
                
            // To/do D3 demo            
            d3.select('btn:nth-of-type(1)').on('submit', function(){
                d3.event.preventDefault(); 
                    // prior to the the line above, when the submit button is pressed
                    // our page refreshes. With this line, we put a stop to that by
                    // preventing the default behavior of the form
                    
                    var input = d3.select("input");
                    // adding a new note
                    d3.select('#notes')
                        .append('p')
                            .classed('note', true)
                            // accessing the inner text of the input box using D3 property
                            .text(input.property('value'));
                        // clear input after submitting
                        input.property('value', '')
            });
    
    // -----------------------------------------------------------------
    // ----------------------------- BONUS -----------------------------
    // -----------------------------------------------------------------
            var input = d3.select('input');
            var preview = d3.select('.preview');
        // add new note
            d3.select('.btn:nth-of-type(1)').on('click',function(){
            	d3.event.preventDefault();
	            d3.select('#notes')
	                .append('p')
	                .classed('note', true)
	                .text(input.property('value'));
	            input.property('value','');
	            setPreview(""); // hide preview and set value to empty string after submitting
            });
    
        // .remove() - removes property and is opposite of .append
            d3.select('.btn:nth-of-type(2)').on('click',function(){
                d3.event.preventDefault();
                // .note is more preferable than p because we don't want to remove the preview note
                d3.selectAll('.note').remove();
            });
            
        // preview note
            input.on('input', function(){
                var note = d3.event.target.value; //target the underlying event; specifically its value
                setPreview(note);
            });
            
        // lucky button
            d3.select('.btn:nth-of-type(3)').on('click', function(){
                d3.event.preventDefault();
                d3.selectAll('.note').style('font-size', function(){
                    return Math.random() * 40 + 'px';
                });
            });
            
            function setPreview(note){
                preview
                    .classed('hide',note==='') // hide class if input is empty
                    .text(note);
            }      
                