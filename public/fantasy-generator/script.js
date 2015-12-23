(function($) {
	$(document).ready(function(){
	      
	    // Option 1
      var grossVerb = [
        "Shit Taking",
        "Puking",
        "Poop Scooping",
        "Garbage Collecting"
        ];
      var celebs = [
        "Justin Beiber's",
        "Drake's",
        "Jared from Subway's",
        "Miley's",
        "Riff Raff's",
        "Taylor Swift's"
        ];
      var analysts = [
        "Stephen A. Smith's",
        "Charles Barkley's",
        "Chris Berman's",
        "Chris Collinsworth's",
        "Joe Buck's",
        "Skip Bayless"
        ];
      var coaches = [
        "Chip Kelly's",
        "Rex Ryan's",
        "Mike McCarthy's",
        "Mike Tomlin's"
        ];
      var swearWords = [
        "Fuck",
        "Shit",
        "Bitch",
        "Ass",
        "Dick"
        ];
        
      // Option 2
      var nice = [
        "Pleasant",
        "Admirable",
        "Cordial",
        "Peachy",
        "Friendly",
        "Charming",
        "Gentle"
        ];
      var mean = [
        "Brusque",
        "Insolent",
        "Savage",
        "Coarse",
        "Vulgar",
        "Fuming",
        "Irate",
        "Heated"
        ];
      var rand = [
        "Mushy",
        "Supple",
        "Flimsy",
        "Furry",
        "Pulpy",
        "Flabby",
        "Luscious",
        "Greasy"
        ];
        
      // Option 3
      var GoT = [
        "Lannisters",
        "Black Crows",
        "Targaryans",
        "Starks",
        "Direwolfs",
        "Greyjoys",
        "Flayed Men"
        ];
      var nouns = [
        "Shit Stains",
        "Septic Tanks",
        "Condom Wrappers",
        "Porto Pottys",
        "Rusty Buckets"
        ];
      var objects = [
        "Lamps",
        "Door Knobs",
        "Sandals",
        "Tray Tables",
        "Fanny Packs",
        "Logs",
        "Wiffle Balls",
        "Flip Flops",
        "Pillows"
        ];
      var teams = [
        "Vikings",
        "Packers",
        "Broncos",
        "Jets",
        "Bills",
        "Steelers",
        "Eagles",
        "Falcons",
        "Seahawks"
        ];
      var verbs = [
        "Destroyers",
        "Conquerers",
        "Murderers",
        "Wankers",
        "Smashers",
        "Pwners",
        "Ravagers",
        "Extinguishers"
        ];
  
      var item;
      function getRandom(arr) {
        item = arr[Math.floor(Math.random()*arr.length)];
        return item;
      }
      
      var result1 = $('#result1'),
          result2 = $('#result2'),
          result3 = $('#result3');
          
      $('#generate').click(function () {
        var key1 = $('#firstList :selected').attr('value'),
            key2 = $('#secondList :selected').attr('value'),
            key3 = $('#thirdList :selected').attr('value');
          
          switch (key1) {
            case '1':
              result1.text(getRandom(celebs));
              break;
            case '2':
              result1.text(getRandom(grossVerb));
            break;
            case '3':
              result1.text(getRandom(analysts));
            break;
            case '4':
              result1.text(getRandom(coaches));
            break;
            case '5':
              result1.text(getRandom(swearWords));
            break;
            
            default:
              alert('no');
          }
          switch (key2) {
            case '1':
              result2.text(getRandom(nice));
              break;
            case '2':
              result2.text(getRandom(mean));
            break;
            case '3':
              result2.text(getRandom(rand));
            break;
            
            default:
              alert('nah');
          }
          switch (key3) {
            case '1':
              result3.text(getRandom(GoT));
              break;
            case '2':
              result3.text(getRandom(nouns));
            break;
            case '3':
              result3.text(getRandom(objects));
            break;
            case '4':
              result3.text(getRandom(teams));
            break;
            case '5':
              result3.text(getRandom(verbs));
            break;
            
            default:
              alert('no');
          }


      });
	});
}(jQuery));
