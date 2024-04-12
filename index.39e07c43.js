!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function e(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}function r(r){return function(e){if(Array.isArray(e))return t(e)}(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||e(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=new(function(){var t,a;function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Array.from({length:4},function(){return[,,,,].fill(0)});!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,i),this.initialState=t,this.state=t.map(function(t){return r(t)}),this.status="idle",this.score=0}return t=[{key:"moveLeft",value:function(){var t=this;if(this.isStateValid(this.state)){var e=this.state.map(function(e){return t.moveCells(e)});this.updateGameState(e),this.completeMoveTasks()}}},{key:"moveRight",value:function(){var t=this,e=this.state.map(function(t){return r(t).reverse()});if(this.isStateValid(e)){var n=e.map(function(e){return t.moveCells(e).reverse()});this.updateGameState(n),this.completeMoveTasks()}}},{key:"moveUp",value:function(){var t=this,e=this.rotateRight(this.state);if(this.isStateValid(e)){var n=r(e.map(function(e){return t.moveCells(r(e))})),a=this.rotateLeft(n);this.updateGameState(a),this.completeMoveTasks()}}},{key:"moveDown",value:function(){var t=this,e=r(this.rotateRight(this.state).map(function(t){return r(t).reverse()}));if(this.isStateValid(e)){var n=e.map(function(e){return t.moveCells(r(e)).reverse()}),a=this.rotateLeft(n);this.updateGameState(a),this.completeMoveTasks()}}},{key:"moveCells",value:function(t){for(var e=[],r=0;r<t.length;){var n=t[r],a=t[r+1];n?n===a?(e.push(2*n),this.score+=2*n,r+=2):(e.push(n),r++):r++}for(;e.length<t.length;)e.push(0);return e}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.completeMoveTasks(2)}},{key:"restart",value:function(){this.resetState(),this.status="idle",this.score=0}},{key:"generateNewTile",value:function(){var t=this.getEmptyCells();if(t.length){var r,n=function(t){if(Array.isArray(t))return t}(r=t[Math.floor(Math.random()*t.length)])||function(t,e){var r,n,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i=[],o=!0,s=!1;try{for(a=a.call(t);!(o=(r=a.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(t){s=!0,n=t}finally{try{o||null==a.return||a.return()}finally{if(s)throw n}}return i}}(r,2)||e(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],i=n[1];this.state[a][i]=.9>Math.random()?2:4}}},{key:"getEmptyCells",value:function(){return this.getState().flatMap(function(t,e){return t.map(function(t,r){return 0===t?[e,r]:null})}).filter(function(t){return null!==t})}},{key:"rotateLeft",value:function(t){for(var e=[],r=t[0].length,n=t.length,a=0;a<r;a++)e.push(Array.from({length:n},function(){return""}));for(var i=0;i<n;i++)for(var o=0;o<r;o++){var s=r-1-o;e[i][s]=t[o][i]}return e}},{key:"rotateRight",value:function(t){for(var e=[],r=t[0].length,n=t.length,a=0;a<r;a++)e.push(Array.from({length:n},function(){return""}));for(var i=0;i<n;i++)for(var o=0;o<r;o++){var s=i;e[r-1-o][s]=t[i][o]}return e}},{key:"isStateValid",value:function(t){if("playing"!==this.status)return!1;var e=!0,r=!1,n=void 0;try{for(var a,i=t[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){for(var o=a.value,s=!1,u=!1,l=0;l<o.length-1;l++){if(o[l]===o[l+1]){s=!0;break}o[l]||(u=!0)}if(s||u)return!0}}catch(t){r=!0,n=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}return!1}},{key:"completeMoveTasks",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0;e<t;e++)this.generateNewTile();var r=this.getState();this.isVictory(r)?this.status="win":this.isDefeat(r)&&(this.status="lose")}},{key:"isDefeat",value:function(t){var e=this,r=this.rotateRight(t);return[t,r].every(function(t){return!e.isStateValid(t)})}},{key:"isVictory",value:function(t){return t.flat().some(function(t){return 2048===t})}},{key:"resetState",value:function(){this.state=r(this.initialState.map(function(t){return r(t)}))}},{key:"updateGameState",value:function(t){this.state=t}}],n(i.prototype,t),a&&n(i,a),i}()),i=document.querySelector(".container"),o=document.querySelector(".game-field"),s=i.querySelector(".button"),u=i.querySelector(".game-score"),l={start:i.querySelector(".message-start"),restart:i.querySelector(".message-restart"),lose:i.querySelector(".message-lose"),win:i.querySelector(".message-win")},f=r(o.querySelectorAll(".field-row")).map(function(t){return r(t.children)});function c(t,e){t.forEach(function(t,r){t.forEach(function(t,n){var a=e[r][n];a.className=t?"field-cell field-cell--".concat(t):"field-cell",a.innerHTML=t||""})})}function h(){var t=a.getStatus();for(var e in l)if(Object.hasOwnProperty.call(l,e)){var r=l[e];r&&r.classList.toggle("hidden",e!==t)}}s.addEventListener("click",function(){if("Start"===s.textContent)a.start(),s.textContent="Restart",s.classList.replace("start","restart");else{var t;a.restart(),t=a.getScore(),u.innerHTML=t,s.textContent="Start",s.classList.replace("restart","start")}c(a.getState(),f),h()}),document.addEventListener("keydown",function(t){if(t.preventDefault(),"playing"===a.getStatus()){var e={ArrowUp:a.moveUp,ArrowDown:a.moveDown,ArrowLeft:a.moveLeft,ArrowRight:a.moveRight}[t.key];e&&e.call(a);var r=a.getScore();c(a.getState(),f),u.innerHTML=r,h()}})}();
//# sourceMappingURL=index.39e07c43.js.map
