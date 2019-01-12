var Discord = require('discord.js');
var IxRawan = new Discord.Client();


IxRawan.on('ready', () => {
    console.log(`Welcome  ${IxRawan.user.tag}!`);
    IxRawan.user.setGame('E#help|E#Inv', 'https://twitch.tv/IDK');
  });
  var prefix = 'E#'








  IxRawan.on("message", message => {
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith("E#clear")) {
				if(!message.channel.guild) return message.reply('** This command only for servers **')
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **You Dont have `MANAGE_MESSAGES ` Permission**');
   if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':x: | **I Dont Have `MANAGE_MESSAGES ` Permission**')
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "تم الحذف ",
        color: 0x06DF00,
        description: "تم حذف الرسائل بنجاح",
        footer: {
          text: "EpicBot System"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});




  IxRawan.on("message", message => {
    if (message.content === ("E#help")) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
         E#bc1 : برودكاست لجميع اعضاء السيرفر بايمبد
         E#bc2 : برودكاست لجميع اعضاء السيرفر بدون ايمبد
         E#bc3 : برودكاست للاعضاء  الاونلاين فقط
         ------------------------------
         E#id : عرض ملفك الشخصي
         E#ask : البوت يسئلك اسئلة
         E#server : احصائيات السيرفر
         ------------------------------
         E#clear : مسح الشات
         E#voicesetup <channelName0> : منشان تسوي روم يوريك كم شخص برومات صوتية ملاحظة لما تكتب اسم الروم اكتب رقم 0 اخر شي
         ------------------------------
         E#guilds : لمعرفة كم عدد سيرفرات التي يتواجد فيها بوتنا
         E#inv : دعوه البوت الى سيرفر
         E#channels : لمعرفة كم عدد الرومات الموجودة بسيرفر
         E#Users : لمعرفة كم عدد اعضاء الموجودين بسيرفر
         E#help : عرض هذه  الرسالة
         ------------------------------
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
IxRawan.on('message', message => {
     if (message.content === ("E#help")) {
		 if(!message.channel.guild) return message.reply('** This command only for servers **')
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});









IxRawan.on('message', async message => {
    if(message.content.startsWith("E#voicesetup")) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **You Dont Have `MANAGE_CHANNELS ` Permission**');
    if(!message.guild.member(IxRawan.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **I Dont Have `MANAGE_CHANNELS ` Permission**');
    var args = message.content.split(' ').slice(1).join(' ');
    if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
    if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
    message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
    message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(() => {
        c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
          if(err) return;
        });
      },3000);
    });
    }
  });



IxRawan.on('message', function(msg) {
    if(msg.content.startsWith ('E#server')) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



  IxRawan.on('message', message => {
    if (message.content.startsWith("E#avatar")) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



IxRawan.on('message', msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length);
    let args = msg.content.split(" ").slice(1);
  
      if(command === "E#clear") {
		  if(!message.channel.guild) return message.reply('** This command only for servers **')
          const emoji = IxRawan.emojis.find("name", "wastebasket")
      let textxt = args.slice(0).join("");
      if(msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (textxt == "") {
          msg.delete().then
      msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
  } else {
      msg.delete().then
      msg.delete().then
      msg.channel.bulkDelete(textxt);
          msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
          }    
      }
  }
  });
 




  IxRawan.on('message', message => {
    if (true) {
  if (message.content === 'E#inv') {
	  if(!message.channel.guild) return message.reply('** This command only for servers **')
        message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=533424638169186314&permissions=8&scope=bot').catch(e => console.log(e.stack));
  
      }
     } 
    });
  
  
    IxRawan.on('message', message => {
       if (message.content === "E#inv") {
		   if(!message.channel.guild) return message.reply('** This command only for servers **')
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#9B59B6")
    .addField("تــــم ارســالك في الخــاص" , " ملاحظة تأكد انك مو مقفل الخاص")
       
       
    message.channel.sendEmbed(embed);
      }
  });
  
  IxRawan.on('message', message => {
    if (message.author.id === IxRawan.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == 'E#bc1') {
	if(!message.channel.guild) return message.reply('** This command only for servers **')
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send('**You Dont Have** `ADMINISTRATOR ` **Permission!!!**')
   if(!message.guild.member(IxRawan.user).hasPermission('ADMINISTRATOR')) return message.channel.send('**I Dont Have** `ADMINISTRATOR ` **Permission!!!**')
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('RANDOM')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});








IxRawan.on('message', message => {
    if (message.author.id === IxRawan.user.id) return;
    if (message.guild) {
    let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == 'E#bc2') {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
    if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    if (!args[1]) {
    return;
    }
      message.guild.members.forEach(m => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .addField('# | الرسالة ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.sendMessage(args)
      });
             if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channe.send(":x: **You Dont have `ADMINISTRATOR `Permission**");
             if(!message.guild.member(IxRawan.user).hasPermission('ADMINISTRATOR')) return message.channe.send(":x: **I Dont have `ADMINISTRATOR `Permission**");
      const AziRo = new Discord.RichEmbed()   
      .setColor('RANDOM')
      message.channel.sendEmbed(AziRo);          
    }
    } else {
      return;
    }
    });




    IxRawan.on("message", message => {

        if (message.content.startsWith("E#bc3")) {
			if(!message.channel.guild) return message.reply('** This command only for servers **')
                     if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
message.delete(); 
};     
});




IxRawan.on('message',function(message) {
    if(message.content.startsWith("E#guilds")) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
        message.channel.send(`Guilds: \`\`${IxRawan.guilds.size}\`\``);
    } 
 });
 //========================================================
 IxRawan.on('message',function(message) {
    if(message.content.startsWith("E#users")) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
        message.channel.send(`Users: \`\`${IxRawan.users.size}\`\``);
    } 
 });
 //=========================================================
 IxRawan.on('message',function(message) {
    if(message.content.startsWith("E#channels")) {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
        message.channel.send(`channels: \`\`${IxRawan.channels.size}\`\``);
    } 
 });






 IxRawan.on('message', message => {
    if (message.content == "E#ask") {
		if(!message.channel.guild) return message.reply('** This command only for servers **')
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})













IxRawan.login(process.env.BOT_TOKEN);
