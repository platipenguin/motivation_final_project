// This file contains the data for conversations in the interviewer side of the activity.
scriptData = {
	"conv0":{
		"typingRate":40,
		"base":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"Terry C. Female, 43",
				"answer":"Hey there.",
				"unlocks":null,
				"moves":"conv1"
			},{
				"qid":1,
				"hidden":false,
				"asked":false,
				"question":"Benjamin S. Male, 54",
				"answer":"Oh, hello officer!",
				"unlocks":null,
				"moves":"conv2"
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"Liza B. Female, 28",
				"answer":"Hello.",
				"unlocks":null,
				"moves":"conv3"
			}
		]
	},
	"conv1":{
		"title":"Terry C. Female, 43",
		"name":"Terry C.",
		"typingRate":40,
		"base":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"Tell me about yourself",
				"answer":"Sure thing. Well, I’m married, two kids. Both of ‘em are adopted. Sue and I were thinking about in vitro, but we decided against it. I own a restaurant. You’ve probably passed it down on Main – T’s Café. Come in any time and I’ll give you an entrée on the house. I know this job isn’t glamorous, you deserve it!",
				"locations":["T's Café"],
				"foods":null,
				"unlocks":[1,2],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Do you ever eat any of the food at your restaurant?",
				"answer":"Course I do, I’m the best cook I know! Couldn’t have been anything from my restaurant that made people sick, though. Health inspector uses T’s as a gold standard!",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":true,
				"asked":false,
				"question":"Did anyone else in your family get sick?",
				"answer":"Nope, I was the only one. Lucky me!",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":3,
				"hidden":false,
				"asked":false,
				"question":"Can you think of anything that might have made you sick?",
				"answer":"Hmm, sorry, nothing comes to mind. I usually only eat what I cook, and I’m good about cooking meat all the way through and stuff.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":false,
				"question":"I need you to think back...",
				"answer":"...",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			},{
				"qid":5,
				"hidden":false,
				"asked":true,
				"question":"Thanks for your help.",
				"answer":"Sure thing, let me know if you have any more questions.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"out"
			}
		],
		"between":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"To the day you became sick.",
				"answer":"Sure.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"day"
			},{
				"qid":1,
				"hidden":false,
				"asked":false,
				"question":"Two days before you became sick.",
				"answer":"Yeah, sure.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"days"
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"A week before you became sick.",
				"answer":"Hm, alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"week"
			},{
				"qid":3,
				"hidden":false,
				"asked":true,
				"question":"I want to ask something else.",
				"answer":"Sure.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"base"
			}
		],
		"day":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"Let’s see, I had a yogurt for breakfast. We get most of our groceries from this store between the house and the restaurant – Big H Grocery. For lunch I made Sue and me paninis with turkey, mustard, and cheese. Those came from the restaurant, and we get all our food from a supply company called SNS Inc. I wasn't having any dinner that night, though!",
				"locations":["Big H Grocery", "T's Café", "SNS Inc."],
				"foods":["Yogurt", "Bread", "Turkey", "Mustard", "Cheese"],
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"How do you store the meat and cheese in your restaurant?",
				"answer":"We have a big fridge. It's definitely working - we just had it serviced last month.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing that day?",
				"answer":"I was working at my restaurant the whole day. It was pretty normal – worked all day, closed up, then spent some time with the kids back home. Well, until I had to make a mad dash for the bathroom!",
				"locations":["T's Café"],
				"foods":null,
				"unlocks":[3],
				"moves":null
			},{
				"qid":3,
				"hidden":true,
				"asked":false,
				"question":"Did your kids show any symptoms that night?",
				"answer":"Nope, not as far as I could tell.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Sure.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		],
		"days":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"Oh, that was Sunday. I woke up late, so for lunch I had a salad with arugula, some avocado, alfalfa sprouts, some tomatoes, and I think there might have been some onion on there too. I picked all that up at a different grocery store than normal. Um, Schmidt's? Yeah, it was definitely called Schmidt's.",
				"locations":["Schmidt's Organic Grocery"],
				"foods":["Arugula", "Avocados", "Alfalfa Sprouts", "Tomatoes", "Onions"],
				"unlocks":[1,2],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Did you wash all of the vegetables in your salad before you ate them?",
				"answer":"Nah, we went right from the store to the picnic, and it was all bagged produce anyway. They wash that stuff before they even package it.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":true,
				"asked":false,
				"question":"Did you eat anything else that day?",
				"answer":"Oh yeah, sorry. Um... you know, for the life of me, I can't remember!",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":3,
				"hidden":false,
				"asked":false,
				"question":"What were you doing that day?",
				"answer":"The family and I had a picnic that day. We swung by a different grocery store than usual since it was on the way, then we spent the afternoon at Memorial Park.",
				"locations":null,
				"foods":null,
				"unlocks":[2,4],
				"moves":null
			},{
				"qid":4,
				"hidden":true,
				"asked":false,
				"question":"Did your family all eat the same thing at the picnic?",
				"answer":"Well, almost. Sue and the kids all had PB&J's. I had a salad so I was the odd duck out!",
				"locations":null,
				"foods":["Peanut Butter", "Jelly"],
				"unlocks":null,
				"moves":null
			},{
				"qid":5,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Sure.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		],
		"week":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"Pffff, sorry I’m not sure. It was a week day, so I would have been working at the restaurant. And I usually have a sandwich or a salad for lunch, and maybe a pasta for dinner? All the food for the restaurant comes from a supply company called SNS Inc.",
				"locations":["T's Café", "SNS Inc."],
				"foods":["Bread", "Pasta", "Lettuce"],
				"unlocks":[1,2],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"What do you usually have on your sandwiches and salads?",
				"answer":"Hm, any meat on the sandwiches. Beef, turkey, ham. Then usually some sort of cheese, probably mayo, maybe tomatoes or something. And salad I usually do a vinaigrette dressing, maybe some chicken, chickpeas, maybe some alfalfa sprouts.",
				"locations":[],
				"foods":["Beef", "Turkey", "Ham", "Cheese", "Mayonnaise", "Tomatoes", "Salad Dressing", "Chicken", "Chickpeas", "Alfalfa Sprouts"],
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":true,
				"asked":false,
				"question":"Have you ever heard of SNS Inc. recalling food?",
				"answer":"No. And you bet your butt I wouldn't use them if I had.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":3,
				"hidden":false,
				"asked":false,
				"question":"What were you doing that day?",
				"answer":"Oh, that's the day I fell! Yeah, me and Sue were out jogging in Memorial Park. They haven't paved the path around the lake in ages, so a piece broke off and I slid and fell right into the lake! Thanks for reminding me, I still need to yell at the Mayor about that.",
				"locations":["Memorial Park Lake"],
				"foods":["Water"],
				"unlocks":[4],
				"moves":null
			},{
				"qid":4,
				"hidden":true,
				"asked":false,
				"question":"Could you have swallowed some lake water when you fell in?",
				"answer":"I probably did. I fell face first and came up spluttering!",
				"unlocks":null,
				"moves":"null"
			},{
				"qid":5,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Sure.",
				"unlocks":null,
				"moves":"between"
			}
		]
	},
	"conv2":{
		"title":"Benjamin S. Male, 54",
		"name":"Benjamin S.",
		"typingRate":50,
		"base":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"Tell me about yourself",
				"answer":"Hm, well, there isn’t a whole lot to tell. I’m an accountant at Fink and Co. I’m in the personal accounting side of the company, so I mostly help people out with their taxes. Though, I’m also president of the Salamander Slayer Trading Card Game Society. Haha, so I guess that’s something different!",
				"locations":["Fink & Co."],
				"foods":null,
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Did anyone else at Fink and Co. get sick?",
				"answer":"Uh, not that I know of, no.",
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"Can you think of anything that might have gotten you sick?",
				"answer":"Well, uh, honestly I’m embarrassed to even admit this, but I ate a hot dog from EZ Mart right before I got sick. Not even an hour later I was running to the bathroom! Do you think that could have been it?",
				"locations":["EZ Mart"],
				"foods":["Hot Dogs"],
				"unlocks":[3],
				"moves":null
			},{
				"qid":3,
				"hidden":true,
				"asked":false,
				"question":"You got sick an hour after eating the hot dog?",
				"answer":"Yes, I distinctly remember. My computer crashed that morning, so I was stuck with IT until noon. I had a meeting at 12:30, so I rushed out and bought a hot dog. But I ended up missing my meeting because I was so sick.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":false,
				"question":"I need you to think back...",
				"answer":"...",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			},{
				"qid":5,
				"hidden":false,
				"asked":true,
				"question":"Thanks for your help.",
				"answer":"Oh, yes, I'm happy to help! Let me know if there's anything else you want to know. I'll be here.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"out"
			}
		],
		"between":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"To the day you became sick.",
				"answer":"Okay.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"day"
			},{
				"qid":1,
				"hidden":false,
				"asked":false,
				"question":"Two days before you became sick.",
				"answer":"Uhh, okay.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"days"
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"A week before you became sick.",
				"answer":"Uh, okay, I'll try.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"week"
			},{
				"qid":3,
				"hidden":false,
				"asked":true,
				"question":"I want to ask something else.",
				"answer":"Okay.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"base"
			}
		],
		"day":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"I had a hot dog from EZ Mart. That was about an hour before I got sick. Um, then earlier in the day, I had a sausage egg Swift-Muffin from that fast food place, Swifties. Oh, and a chocolate milk shake!",
				"locations":["EZ Mart", "Swifties"],
				"foods":["Hot Dogs", "Sausage Egg Swift-Muffin", "Chocolate Milk Shakes"],
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Did any of the workers at Swifties look sick?",
				"answer":"Hm, I don't think so. But I don't think I would have noticed even if they were.",
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing?",
				"answer":"It was just an average day. I drove into work at 9, then ran out to grab lunch. I had a meeting I was supposed to go to, but... um... I didn't make it because of, bodily, reasons.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":3,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		],
		"days":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"I don’t remember exactly, but I usually have toast in the morning. I had a sandwich and some chips for lunch, and I would have had a frozen meal for dinner. Lasagna maybe? I purchase all my groceries from the Big H Grocery store near my house, and the sandwich I bought from a restaurant. I think it was T's Diner or T's Restaurant.",
				"locations":["Big H Grocery", "T's Café"],
				"foods":["Bread", "Potato Chips", "Frozen Lasagna"],
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"What was on the sandwich?",
				"answer":"Umm, maybe… oh! It was a panini. And it had turkey with cheese and a honey mustard on it.",
				"locations":null,
				"foods":["Turkey", "Cheese", "Mustard"],
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing?",
				"answer":"Ohh! Wait! I went out to lunch with some of my coworkers. And I heard Miller had to miss a few days of work because he got sick, too! I didn't find that out until I got back though.",
				"locations":null,
				"foods":null,
				"unlocks":[3,4],
				"moves":null
			},{
				"qid":3,
				"hidden":true,
				"asked":false,
				"question":"Do you remember the name of the restaurant?",
				"answer":"I do not. Hold on... that's strange. I usually keep my receipts... Well, I remember it was T's Something. T's Diner, maybe?",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":true,
				"asked":false,
				"question":"Did you and Miller share any other meals?",
				"answer":"Hm, that was the only time we both went to a restaurant that week. Though, I believe the company bought pizza the day before. We both would have eaten that.",
				"locations":["Fink & Co."],
				"foods":["Pizza"],
				"unlocks":[5],
				"moves":null
			},{
				"qid":5,
				"hidden":true,
				"asked":false,
				"question":"Do you remember where the pizza came from?",
				"answer":"Yes, when the office orders pizza, it’s usually from Tortelli’s Pizzeria.",
				"locations":["Tortelli’s Pizzeria"],
				"foods":null,
				"unlocks":[6],
				"moves":null
			},{
				"qid":6,
				"hidden":true,
				"asked":false,
				"question":"You're sure you and Miller were the only people from the office who became sick?",
				"answer":"Yes, I'm certain now.",
				"locations":null,
				"foods":null,
				"unlocks":[6],
				"moves":null
			},{
				"qid":7,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		],
		"week":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"Hm... oh! I remember that day. Hold on, I should have the receipts somewhere in my satchel… yes! Cheese, pepperoni, and mushroom pizzas from Tortelli’s Pizzeria. And... Smush Soda from Saveprice Wholesale.",
				"locations":["Tortelli’s Pizzeria", "Saveprice Wholesale"],
				"foods":["Pizza", "Smush Soda"],
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Did you eat anything else that day?",
				"answer":"Um... *ahem*. No.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing?",
				"answer":"Well, it was the Salamander Slayer Trading Card Game Society's annual tournament. As president, it was my duty to oversee the event. I led the initial procession through Memorial Park to the Convention Center, then spent the majority of the weekend at the Convention Center.",
				"locations":["Convention Center"],
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":3,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		]
	},
	"conv3":{
		"title":"Liza B. Female, 28",
		"name":"Liza B.",
		"typingRate":30,
		"base":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"Tell me about yourself",
				"answer":"Okay, well, first of all, it is bizarre for me to get sick. I eat totally organic, I’ve been vegan for five years, and I work out every day. My immune system is insane, so whatever it is going around right now is some sort of killer or something. Um, I’m a personal trainer at Power Lift Gym. Is there anything else you need to know?",
				"locations":["Power Lift Gym"],
				"foods":null,
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Have you eaten any meat recently?",
				"answer":"Absolutely not. I do zero animal products. I don't judge people who do or anything, but I started feeling amazing the moment I cut all that stuff out of my diet. You couldn't pay me to go back.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"Can you think of anything that might have gotten you sick?",
				"answer":"Like, I don’t think so. I’m sure sick people come to the gym sometimes, but I always wipe down machines and wash my hands and stuff. I'm really good about it.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":false,
				"question":"I need you to think back...",
				"answer":"...",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			},{
				"qid":5,
				"hidden":false,
				"asked":true,
				"question":"Thanks for your help.",
				"answer":"Sure, just tell me if you need something else.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"out"
			}
		],
		"between":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"To the day you became sick.",
				"answer":"Okay.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"day"
			},{
				"qid":1,
				"hidden":false,
				"asked":false,
				"question":"Two days before you became sick.",
				"answer":"Oh, okay.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"days"
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"A week before you became sick.",
				"answer":"Okay, I'll try to remember.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"week"
			},{
				"qid":3,
				"hidden":false,
				"asked":true,
				"question":"I want to ask something else.",
				"answer":"Okay.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"base"
			}
		],
		"day":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"I always do a kale smoothie in the morning on work days. So that had kale, pineapple, ginger, and almond milk. My friend Bryce had told me about something called an ‘elvis wrap’ the week before, so I made that. It’s a whole grain tortilla with peanut butter, banana, and tempeh bacon. And I’m pretty sure I did a curried coconut quinoa with roasted cauliflower that night, but, um that didn't stay down.",
				"locations":[],
				"foods":["Kale", "Pineapple", "Ginger", "Almond Milk", "Tortilla Shells", "Peanut Butter", "Banana", "Tempeh Bacon", "Curry Sauce", "Coconuts", "Quinoa", "Cauliflower"],
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Did you buy all those ingredients at the same store?",
				"answer":"Oh, yeah. There’s this little store called Schmidt’s Organic Grocery that I get all my groceries from. I’m friends with the weekend manager, and she always gives me recipes.",
				"locations":["Schmidt’s Organic Grocery"],
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing?",
				"answer":"I was just at work that day. Um, one of my clients was sneezing a lot. So maybe I caught something from her? But I didn’t do anything special.",
				"locations":["Power Lift Gym"],
				"foods":null,
				"unlocks":[3],
				"moves":null
			},{
				"qid":3,
				"hidden":true,
				"asked":false,
				"question":"Did your client have a headache or stomach cramps?",
				"answer":"She didn’t say anything about stomach cramps. She was sneezing a lot, so I washed my hands for, like, ten minutes after we finished. But she wasn’t running to the bathroom a lot or anything.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		],
		"days":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"I worked out a ton that day, so I ate a lot. Um, I had granola in the morning, and I might have put some raisins in it? I didn’t really have a lunch, but then I had a huge smoothie for dinner. I had some alfalfa sprouts that were about to go bad, so I dumped a bunch of those in with some apples, kale, and carrots. All of that came from Schmidt's Organic Grocery.",
				"locations":["Schmidt's Organic Grocery"],
				"foods":["Granola", "Raisins", "Alfalfa Sprouts", "Apple", "Kale", "Carrots"],
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"Did you wash everything before you put it in your salad?",
				"answer":"Oh my god, yeah! I’ve read stories about people getting E. coli and having irritable bowel syndrome for the rest of their lives. I don’t want that!",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing?",
				"answer":"Umm, it was a pretty normal work day. I did go out with some friends, later. It was vodka cranberry night.",
				"locations":null,
				"foods":["Vodka", "Cranberry Juice"],
				"unlocks":[3],
				"moves":null
			},{
				"qid":3,
				"hidden":true,
				"asked":false,
				"question":"Where did you go?",
				"answer":"Oh, it was this new bar. Um, it had kind of a French name. Pastiche I think? You’d have to look that up though. It was on Washington Ave.",
				"locations":["Pastiche"],
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		],
		"week":[
			{
				"qid":0,
				"hidden":false,
				"asked":false,
				"question":"What did you eat and where did you buy it?",
				"answer":"Uhhhh... Sorry, I don't really remember anything specific.",
				"locations":null,
				"foods":null,
				"unlocks":[1],
				"moves":null
			},{
				"qid":1,
				"hidden":true,
				"asked":false,
				"question":"What do you eat on a normal day?",
				"answer":"I usually drink a kale smoothie in the morning. But I try to change it up so it doesn’t get stale, you know? So there’s always almond milk, but I might mix in a banana, or some pistachios, or celery. Oh, and I remember! I had a giant avocado pasta dinner that night.",
				"locations":null,
				"foods":["Kale", "Almond Milk", "Bananas", "Pistachios", "Celery", "Avocados", "Pasta"],
				"unlocks":null,
				"moves":null
			},{
				"qid":2,
				"hidden":false,
				"asked":false,
				"question":"What were you doing?",
				"answer":"I was in a triathlon most of the day – I woke up early, swam through the lake in Memorial Park, biked, and ran. Some of my friends and my roommates raced with me, and we all hung out afterwards. Oh, I guess we had some veggie crisps that night, too.",
				"locations":["Memorial Park Lake"],
				"foods":["Water", "Veggie Crisps"],
				"unlocks":[3],
				"moves":null
			},{
				"qid":3,
				"hidden":true,
				"asked":false,
				"question":"Where did you buy the veggie crisps?",
				"answer":"My friend brought them, so I have no idea where they came from. Definitely one of the organic stores, though. They don't sell stuff like that at the normal grocery stores.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":null
			},{
				"qid":4,
				"hidden":false,
				"asked":true,
				"question":"I want you to think back to a different time...",
				"answer":"Alright.",
				"locations":null,
				"foods":null,
				"unlocks":null,
				"moves":"between"
			}
		]
	}
}