    /*implement the gfda commands here
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
    
    'rant': { },
    
    'help': '*What does it all fucking mean?*\n' +
            '/gfda, A random snippet of good fucking design advice\n' +
            '/gfda [ID], When you\'re feeling really fucking specific\n' +
            '/gfda rant, When you need some classic fucking advice\n' +
            '/gfda sfw, Slightly censored & safe for work — try with /gfda [ID], /gfda rant, /gfda help',
    
};