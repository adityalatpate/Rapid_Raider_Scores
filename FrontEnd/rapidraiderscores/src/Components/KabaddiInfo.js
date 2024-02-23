import React from 'react'
import kabaddiImage from '../Assests/AboutImage.png'
import '../Components/Kabaddi.css'
const KabaddiInfo = () => {
  return (
    <div className="container">
         
    <h1>About Kabaddi</h1>
    <img src= {kabaddiImage} alt="Kabaddi" className="kabaddi-image" />

<p>
Kabaddi is a traditional Indian sport that dates back over 4,000 years and has evolved into a popular competitive sport played worldwide. It is primarily played in South Asia, particularly in India, Pakistan, Bangladesh, and Nepal, but it has gained international recognition and is now played in over 30 countries. Kabaddi has also become a staple of multi-sport events such as the Asian Games.
</p>

<h2>Objective:</h2>
<p>
The objective of Kabaddi is for one player, known as the "raider," to enter the opposing team's half of the court, tag as many opposing players as possible, and return to their own half of the court without being tackled and held by the defenders. Meanwhile, the defenders try to stop the raider by tackling and holding them while the raider attempts to hold their breath and chant "kabaddi" repeatedly to prove they haven't inhaled.
</p>

<h2>Gameplay:</h2>
<ul>
<li>Kabaddi is typically played on a rectangular court that is divided into two halves.</li>
<li>Each team consists of seven players.</li>
<li>The game begins with a toss to determine which team raids first.</li>
<li>The raider, once in the opponent's half, must touch one or more opponents and return to their own half without being tackled.</li>
<li>Points are scored when the raider successfully touches an opponent and returns to their half safely.</li>
<li>If the raider is tackled and held by the defenders, they are out, and the defending team earns a point.</li>
<li>Defenders can also score points by successfully preventing the raider from returning to their half.</li>
</ul>

<h2>Rules and Regulations:</h2>
<ul>
<li>Players must not cross the center line while raiding or defending.</li>
<li>Each raid has a time limit, usually around 30 seconds, during which the raider must tag an opponent and return.</li>
<li>Defenders must hold the raider until they take a breath or chant "kabaddi" multiple times.</li>
<li>Players must not use their hands to grab or hold the raider. Instead, they use their bodies to tackle and hold them.</li>
<li>Teams alternate between raiding and defending throughout the match.</li>
</ul>

<h2>Variations:</h2>
<ul>
<li>There are different variations of Kabaddi played across regions, including Standard Kabaddi, Circle Kabaddi, and Beach Kabaddi.</li>
<li>Some variations allow for additional players on each team, different court sizes, and variations in rules.</li>
</ul>

<h2>Competitions:</h2>
<ul>
<li>Kabaddi has gained international recognition and is played in various competitions, including the Kabaddi World Cup, Asian Games, South Asian Games, and various national and regional leagues.</li>
<li>The Pro Kabaddi League (PKL) in India is one of the most popular Kabaddi leagues globally, featuring both Indian and international players.</li>
</ul>

<p>
Overall, Kabaddi is a fast-paced and exciting sport that requires agility, strength, strategy, and teamwork. It continues to grow in popularity both domestically in South Asia and internationally, attracting a diverse audience of spectators and players alike.
</p>
</div>
  )
}

export default KabaddiInfo