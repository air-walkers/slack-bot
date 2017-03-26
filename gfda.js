    /*implement the gfda commands here
    
    we need:
    -a JSON object with random quotes
    -a JSON object with random advice (sometimes with picture)
    -A rant picture
    -A JSON object with random quotes safe for work
    -A JSON object with help text
    
    /gfda > random quote (if q.text is empty send a random quote from a file)
    /gfda [#] > random advice text (sometimes with a picture)
    /gfda rant > shows a picture with quotes. Always same pictures
    /gfda sfw > random quote, but safe for work version
    /gfda help shows text with all the commands
    /gfda something doesnt recognize/error, then show a random advice text*/

//do a string replacement for 'sfw' on 'random'
module.exports = {
    
    'random': [
              'Add some fucking contrast.',
              'Have a clear fucking hierarchy.',
              'Use fucking Helvetica.',
              'Read a fucking book.',
              'Get over your fucking self.',
              'Make it fucking balanced.',
              'Sketch more fucking ideas.',
              'Sans-fucking-serif.',
              'Use a fucking grid system.',
              'Use more fucking white space.',
              'Make it fucking consistent.',
              'Make it fucking asymmetrical.',
              'Fucking simplify.',
              'Use a fucking color scheme.',
              'Have a fucking focal point.',
              'Fix your fucking letterspacing.',
              'Rag your fucking type.',
              'Do your fucking research.',
              'Fucking communicate something.',
              'Always use a fucking contract.',
            ],
    
    '#': [],
    
    'rant': [ ],
    
    'help': 'some help text'
    
};