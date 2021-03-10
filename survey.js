const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name?  ', (name) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.question('What\'s an activity you like doing? ', (activity) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`)
    
    rl.question('What do you listen to while doing that?', (song) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      
      rl.question('Which meal is your favourite ', (meal) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`)
        
        rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
          // console.log(`Thank you for your valuable feedback: ${answer}`)
          
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            // console.log(`Thank you for your valuable feedback: ${answer}`)
            
            rl.question('What is your superpower? ', (power) => {
              console.log(`
              name: ${name} \n 
              activity: ${activity} \n 
              music: ${song} \n
              meals: ${meal} \n
              food: ${food} \n
              fav sport: ${sport} \n
              superpower ${power}
              `)

          
              
              rl.close();
            })
        
            
           
          })
      
          
         
        })
    
        
       
      })
  
      
     
    })

    
   
  })
});

// rl.close();