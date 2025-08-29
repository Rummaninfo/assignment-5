What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById দিয়ে ১ তা এলিমেন্ট আনে 
getElementsByClassName দিয়ে অনেকগুলো এলিমেন্ট আনা হয়ে  (live collection)
querySelector  CSS selector দিয়ে প্রথম এলিমেন্ট  আনে।
querySelectorAll CSS selector দিয়ে সব এলিমেন্ট  আনে (static NodeList)


How do you create and insert a new element into the DOM?
Answer: 
createElement দিয়ে নতুন এলিমেন্ট বানাতে হয় “p”
P ট্যাগ  ভিতর   innerText = “ new text”
P  ট্যাগ  কে যার ভিতর এপেন্ড করবো তাকে আইডি দিয়ে ধরবো getElementById(‘div’)
div.appendChild(‘p’)

What is Event Bubbling and how does it work?
Answer: 
যখন কোনো এলিমেন্ট কে ক্লিক করা হয়, তখন সেই ইভেন্ট প্রথমে এলিমেন্ট এ ট্রিগার হয় তারপর  প্যারেন্ট  এর  প্যারেন্ট এভাবে উপরে দিকে  ডকুমেন্ট চলে যায় 

What is Event Delegation in JavaScript? Why is it useful? 
Answer: 
parent element এ event listener বসিয়ে child element গুলোর event হ্যান্ডেল করা। প্রতিটা child এ আলাদা listener বসানোর দরকার নেই  শুধু parent এ বসালেই হবে  event bubbling হয়ে child এর ক্লিক ধরা যাবে।


What is the difference between preventDefault() and stopPropagation() methods? 
Answer: 
যখন কোনো element-এর একটা ডিফল্ট অ্যাকশন থাকে যেমন link-এ ক্লিক করলে অন্য পেজে যাওয়া, form submit করলে reload হওয়া, তখন preventDefault() দিলে সেই কাজটা বন্ধ হয়ে যায়।

Event যখন ঘটে, সেটা প্রথমে সেই element-এ ট্রিগার হয় → তারপর তার parent → তারপর document পর্যন্ত যায় bubbling
stopPropagation() দিলে এই উপরে ওঠা বন্ধ হয়ে যায়।
