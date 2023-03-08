window.PuddingMod = {};

/* How it begins:
this._s = this._s || {};
(function(_) {
    var window = this;
    try {
        _.M$b = function(a) {
            this.Fk = a
        }
        ;
    }  
    */

////////////////////////////////////////////////////////////////////
//RUNCODEBEFORE
////////////////////////////////////////////////////////////////////

window.PuddingMod.runCodeBefore = function() {

  console.log("Thank you for loading Yarmiplay's Pudding Mod! Hope you enjoy :)");
  console.log("Please provide feedback and report bugs in #snake-modding in the Official Google Snake Discord");
  console.log("Google Snake SRC Discord link: https://discord.gg/dDuCTm62EZ");

    /// Code inspired by fishes, aka copy-pasted
  window.uiImage = function(src) {
    let img = new Image();
    img.src = src;
    img.width = 40;
    img.height = 40;
    img.class = 'DqMRee SsAred'; // Hardcoded, need to figure out what this is and how to make it dynamic or something.
    return img;
  };

        // Fruit, aka pudding

    for(let src of [
        'https://i.postimg.cc/5y7gwwGY/pudding-cr.png',
    ]) document.querySelector('#apple').appendChild(uiImage(src));
  
      // Skull
  
    //for(let src of [
    //    'https://www.google.com/logos/fnbx/snake_arcade/v12/trophy_10.png',
    //]) document.querySelector('#skull').appendChild(uiImage(src));
  
  // Get all elements with text content
/*const elements = document.querySelectorAll("*:not(script):not(style):not(meta):not(link)");

// Loop through each element
elements.forEach(element => {
  // Get the computed style of the element
  const style = window.getComputedStyle(element);
  
  // Get the current color of the text
  const color = style.color;
  
  // Create a new style with a dark outline and apply it to the element
  element.style.textShadow = `1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000`;
});*/

};

////////////////////////////////////////////////////////////////////
//ALTERSNAKECODE
////////////////////////////////////////////////////////////////////

window.PuddingMod.alterSnakeCode = function(code) {

/* full zih array data:(  
0: 
{base: '#e7471d', target: '#808080', threshold: 10}
1: 
{base: '#eaca23', target: '#909090', threshold: 10}
2: 
{base: '#ea7f00', target: '#909090', threshold: 10}
3: 
{base: '#9823af', target: '#808080', threshold: 10}
4: 
{base: '#ef8d15', target: '#909090', threshold: 10}
5: 
{base: '#49c527', target: '#7a7a7a', threshold: 360}
6: 
{base: '#9823af', target: '#808080', threshold: 10}
7: 
{base: '#f40000', target: '#808080', threshold: 10}
8: 
{base: '#e7471d', target: '#808080', threshold: 10}
9: 
{base: '#ff9900', target: '#909090', threshold: 10}
10: 
{base: '#f26e4d', target: '#858585', threshold: 10}
11: 
{base: '#009900', target: '#858585', threshold: 10}
12: 
{base: '#e7471d', target: '#909090', threshold: 10}
13: 
{base: '#00a10d', target: '#808080', threshold: 1}
14: 
{base: '#00c919', target: '#858585', threshold: 360}
15: 
{base: '#efce13', target: '#909090', threshold: 10}
16: 
{base: '#fe8a00', target: '#858585', threshold: 10}
17: 
{base: '#ff886c', target: '#909090', threshold: 15}
18: 
{base: '#ca953e', target: '#909090', threshold: 10}
19: 
{base: '#ff4040', target: '#858585', threshold: 10}
20: 
{base: '#fc2d00', target: '#808080', threshold: 10}
length: 21
)
*/

/*
    Code that adds new apples:

                for (a = 0; 21 > a; a++)
                    b = tih(a),
                    b = new TK(this.settings,"snake_arcade/v4/apple_" + b + ".png",1,this.oa,"snake_arcade/pixel/px_apple_" + b + ".png"),
                    c = zih[a],
                    UK(b, c.base, c.target, c.threshold),
                    this.wa.push(b)

        tih - this function makes every number 2 digit, so 4 will become 04 and 10 stays 10
        zih - an array of "base color" and "traget color", not sure what those mean. maybe related to poison?

for(a=0;21>a;a++)b=tih(a),b=new TK(this.settings,"snake_arcade/v4/apple_"+b+".png",1,this.oa,"snake_arcade/pixel/px_apple_"+b+".png"),c=zih[a],UK(b,c.base,c.target,c.threshold),this.wa.push(b)};
regex:
        this.[a-zA-Z0-9_$]{1,8}.push\([a-zA-Z0-9_$]{1,8}\)};
*/  
//debugger;

  pudding_src = 'https://i.postimg.cc/5y7gwwGY/pudding-cr.png'

  ip_grabber = new RegExp(/=new [a-zA-Z0-9_$]{1,8}\(this.settings,\"snake_arcade\/v4\/apple_\"/)
  func_name = code.match(ip_grabber)[0].replace("=new ", "").replace('\(this.settings,\"snake_arcade\/v4\/apple_\"',"")
  ip_grabber2 = new RegExp(/[a-zA-Z0-9_$]{1,8}\(b,c.base,c.target,c.threshold\)/)
  func_name2 = code.match(ip_grabber2)[0].replace('\(b,c.base,c.target,c.threshold\)',"")
  array_grabber = new RegExp(/".png"\),c=[a-zA-Z0-9_$]{1,8}\[a\],/)
  array_name = code.match(array_grabber)[0].replace('".png"\),c=',"").replace('[a],',"")
  add_pudding = 'b=22;b=new '+func_name+'(this.settings,"https://i.postimg.cc/5y7gwwGY/pudding-cr.png",1,this.oa,"https://i.postimg.cc/5y7gwwGY/pudding-cr.png");'+func_name2+'(b,\'#eaca23\',\'#909090\',10);this.wa.push(b);$&'
  add_pudding2 = '$&;b=new '+func_name+'(this.settings,"https://i.postimg.cc/5y7gwwGY/pudding-cr.png",1,this.oa,"https://i.postimg.cc/5y7gwwGY/pudding-cr.png");'+func_name2+'(b,\'#eaca23\',\'#909090\',10);this.wa.push(b);'

  link_regex = new RegExp(/settings\.[a-zA-Z0-9_$]{1,8}=\"https\:\/\/www\.google\.com\/logos\/fnbx\/\"\+\(1\=\=\=[a-zA-Z0-9_$]{1,8}\.settings\.[a-zA-Z0-9_$]{1,8}\?\"snake_arcade\/pixel\/px_apple_\"\+[a-zA-Z0-9_$]{1,8}\+\"\.png\"\:\"snake_arcade\/v4\/apple\_\"\+[a-zA-Z0-9_$]{1,8}\+\"\.png\"\)/);
  link_match = code.match(link_regex)[0]
  settings_grab = link_match.split('.')[1].split("=")[0]

  pudding_links = "$&;if(d==22)a.settings."+settings_grab+"=\""+pudding_src+"\""

  add_fruit_array_last_func_regex = new RegExp(/.threshold\),this.[a-zA-Z0-9_$]{1,8}.push\([a-zA-Z0-9_$]{1,8}\)/);
  add_fruit_before_loop_regex = new RegExp(/for\(a=0;21>a;a\+\+\)/);
  print_dog = 'console.log("dog");$&';

  shh_grabber = new RegExp(/[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.path/);
  firstvar_name = code.match(shh_grabber)[0].split('.')[0];
  Hr_name = code.match(shh_grabber)[0].split('.')[1];

  new_shh_line = "if("+firstvar_name+".path===\""+pudding_src+"\")"+firstvar_name+"."+Hr_name+".src=\""+pudding_src+"\";else $&";

  Pr_regex = new RegExp(/[a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,8}\&\&\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}\.src=\"https:\/\/www\.google\.com\/logos\/fnbx\/\"\+[a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8}/)
  Pr_a = code.match(Pr_regex)[0].split('.')[0]
  Pr_ka = code.match(Pr_regex)[0].split('.')[1].split('&')[0]
  Pr_pa = code.match(Pr_regex)[0].split('.')[6]
  Pr_new = "if("+Pr_a+"."+Pr_pa+"==\"" +pudding_src+"\")"+Pr_a+"."+Pr_ka+".src=\""+pudding_src+"\";else $&"

  count_score_regex = new RegExp(/if\("apple"===[a-zA-Z0-9_$]{1,4}\|\|"graphics"===[a-zA-Z0-9_$]{1,4}\)[a-zA-Z0-9_$]{1,4}=[a-zA-Z0-9_$]{1,4}\([a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\),[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}="https:\/\/www\.google\.com\/logos\/fnbx\/"\+\(1===[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\?"snake_arcade\/pixel\/px_apple_"\+[a-zA-Z0-9_$]{1,4}\+"\.png":"snake_arcade\/v4\/apple_"\+[a-zA-Z0-9_$]{1,4}\+"\.png"\);/)
  
  get_count_val1 = code.match(/case "count":[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[0].split(':')[1]
  get_count_val2 = code.match(/case "count":[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]
  get_apple_val2 = code.match(/case "apple":[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}/)[0].split('.')[2]
  console.log("Apple Val 2: " + get_apple_val2)

  yc_settings_regex = new RegExp(`\([a-zA-Z0-9_$]{1,4}\.settings\.${get_apple_val2}\)`)
  yc_settings_regex_v2 = new RegExp(`\([a-zA-Z0-9_$]{1,4}\.settings\.${get_apple_val2}\)`)

  console.log(yc_settings_regex)

  Replace_BB = "COUNT"
  

// if("apple"===b||"graphics"===b)d=ahh(a.settings.yc),a.settings.Bb="https://www.google.com/logos/fnbx/"+(1===a.settings.Ya?"snake_arcade/pixel/px_apple_"+d+".png":"snake_arcade/v4/apple_"+d+".png");
//if\("apple"===b\|\|"graphics"===b\)d=ahh\(a\.settings\.yc\),a\.settings\.Bb="https:\/\/www\.google\.com\/logos\/fnbx\/"\+\(1===a\.settings\.Ya\?"snake_arcade\/pixel\/px_apple_"\+d\+"\.png":"snake_arcade\/v4\/apple_"\+d\+"\.png"\);
//if\("apple"===[a-zA-Z0-9_$]{1,4}\|\|"graphics"===[a-zA-Z0-9_$]{1,4}\)[a-zA-Z0-9_$]{1,4}=[a-zA-Z0-9_$]{1,4}\([a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\),[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}="https:\/\/www\.google\.com\/logos\/fnbx\/"\+\(1===[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\?"snake_arcade\/pixel\/px_apple_"\+[a-zA-Z0-9_$]{1,4}\+"\.png":"snake_arcade\/v4\/apple_"\+[a-zA-Z0-9_$]{1,4}\+"\.png"\);

//[a-zA-Z0-9_$]{1,4}=function(a){""!==a.settings.Bb&&(a.Jb.src=a.settings.Bb);""!==a.settings.Nb&&(a.Em.src=a.settings.Nb);
// [a-zA-Z0-9_$]{1,4}=function\([a-zA-Z0-9_$]{1,4}\){""!==[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}&&\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\.src=[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\);
// Get top bar a.settings.Bb

// Regex for top bar food LMAO END SCREEN WHAT A LOSER WASTE OF TIME
  Bb_regex = new RegExp(/[a-zA-Z0-9_$]{1,4}=function\([a-zA-Z0-9_$]{1,4}\){""!==[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}&&\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\.src=[a-zA-Z0-9_$]{1,4}\.settings\.[a-zA-Z0-9_$]{1,4}\);/)
  Bb_to_count1 = code.match(Bb_regex)[0].split('.')[0].split('=')[3]
  Bb_to_count2 = code.match(Bb_regex)[0].split('.')[2].split('&')[0]
  //console.log("a BB is: " + Bb_to_count1)
  console.log("BB is: " + Bb_to_count2)

  // 
  count_score = code.match(count_score_regex)[0].replaceAll("v4", "v3").replaceAll("apple", "count").replaceAll(Bb_to_count2, Replace_BB).replaceAll(get_apple_val2, get_count_val2)
  //console.log(count_score)
  Bb_replaced_code = code.match(Bb_regex)[0].replaceAll(Bb_to_count2, Replace_BB)

  // still useful maybe?
  check_count_undefined = `if(${Bb_to_count1}.settings.${Replace_BB} in window)${Bb_to_count1}.settings.${Replace_BB}="https://www.google.com/logos/fnbx/snake_arcade/v3/count_00.png";`

  part1 = Bb_replaced_code.split('{')[0];
  part2 = Bb_replaced_code.split('{')[1];

  Bb_replaced_code = part1 + "{" + check_count_undefined + part2;
/// LMAO END SCREEN WHAT A LOSER WASTE OF TIME
  //code = code.assertReplace(Bb_regex, Bb_replaced_code+"debugger;")
//:_.Im.add(a.Ca,"LaTyvd");""!==a.settings.Bb&&(a.Na.src=a.settings.Bb);
  TopBar_bb_regex1 = new RegExp(`\_\.[a-zA-Z0-9_$]{1,4}\.add\\\([a-zA-Z0-9_$]{1,4}\.[a-zA-Z0-9_$]{1,4}\,\"[a-zA-Z0-9_$]{1,8}\"\\\)\;\"\"\!\=\=[a-zA-Z0-9_$]{1,4}\.settings\.${Bb_to_count2}\&\&`)
  TopBar_bb_regex2 = new RegExp(`\\\(a.[a-zA-Z0-9_$]{1,4}.src=a.settings.${Bb_to_count2}\\\);""!==a.settings.[a-zA-Z0-9_$]{1,4}&&\\\(a.[a-zA-Z0-9_$]{1,4}.src=a.settings.[a-zA-Z0-9_$]{1,4}\\\);a=this.[a-zA-Z0-9_$]{1,4}.[a-zA-Z0-9_$]{1,4};`);
  //console.log(TopBar_bb_regex1);
  //console.log(TopBar_bb_regex2);
  //console.log(code.match(TopBar_bb_regex1))
  //console.log(code.match(TopBar_bb_regex2)[0])
  //TopBar_bb_code = code.match(TopBar_bb_regex1)[0].replaceAll(Bb_to_count2,Replace_BB) + code.match(TopBar_bb_regex2)[0].replaceAll(Bb_to_count2,Replace_BB);
  //console.log(TopBar_bb_code);

  TopBar_bb_safety=code.match(TopBar_bb_regex1)[0].replaceAll(Bb_to_count2,Replace_BB)
  TopBar_bb_safety=TopBar_bb_safety.split(';')[0]+';'+check_count_undefined+TopBar_bb_safety.split(';')[1]


  code = code.assertReplace(TopBar_bb_regex1, TopBar_bb_safety);
  code = code.assertReplace(TopBar_bb_regex2, code.match(TopBar_bb_regex2)[0].replaceAll(Bb_to_count2,Replace_BB));


  //console.log("Pr_a is: " + Pr_a)
  //console.log("Pr_ka is: " + Pr_ka)
  //console.log("Pr_pa is: " + Pr_pa)
  //console.log("Pr_new is: " + Pr_new)
  //console.log("Pr_a is: " + Pr_a)

  //debugger;
  //code = code.assertReplace(add_fruit_before_loop_regex, add_pudding);
  code = code.assertReplace(Pr_regex, Pr_new);

  // END SCREEM APPLES (???)
  code = code.assertReplace(shh_grabber, new_shh_line);

  // SETTINGS FRUIT ICON
  code = code.assertReplace(add_fruit_array_last_func_regex, add_pudding2);
  //code = code.assertReplace(count_score, add_pudding2);

  // INITIAL ICON LOAD - for pudding, required for end screen to work
  code = code.assertReplace(link_regex, pudding_links);  //"debugger;"+

  // Changes top bar icon to count score
  code = code.assertReplace(count_score_regex, count_score + "$&");

  //code = code.assertReplace(yc_settings_regex, "("+get_count_val1+".settings."+get_count_val2+")")


  console.log(code);
  //code = code.assertReplace(".66", "0.5");

/*
            UK - PROBABLY the function that probably creates the grey version of the fruit
            need to override it somehow to just make it the skull icon.

            eventually calls:
*/
            /* Oih = function(a, b, c, d, e) {
            a = _.feg(a);
            b = _.feg(b);
            var f = 0 === a[2] ? 1 : b[2] / a[2];
            d = d.getImageData(0, 0, d.canvas.width, d.canvas.height);
            for (var g = d.data, h = 0; h < g.length; h += 4)
                if (0 < g[h + 3]) {
                    var l = _.beg(g[h], g[h + 1], g[h + 2])
                      , r = Math.abs(l[0] - a[0]);
                    180 < r && (r = 360 - r);
                    r = 0 <= c && r >= c;
                    1 > l[2] && !r && (l[0] = b[0],
                    l[1] = b[1],
                    l[2] *= f);
                    l = _.deg(l[0], l[1], l[2]);
                    g[h] = l[0];
                    g[h + 1] = l[1];
                    g[h + 2] = l[2]
                }
            e.putImageData(d, 0, 0)
        };
            */
        
/* Make a regex that just adds the new apple
*/

  return code;
};

////////////////////////////////////////////////////////////////////
//RUNCODEAFTER
////////////////////////////////////////////////////////////////////

window.PuddingMod.runCodeAfter = function() {

};