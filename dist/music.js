const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '后来',
        artist: '刘若英',
        url: 'http://www.ytmp3.cn/down/48101.mp3',
       
      },
      {
        name: '喜欢你',
        artist: '邓紫棋',
        url: 'http://www.ytmp3.cn/down/31944.mp3',
	  },
	  {
        name: '光年之外',
        artist: '邓紫棋',
        url: 'http://www.ytmp3.cn/down/55362.mp3',
	  },
	  {
        name: '后会无期',
        artist: '邓紫棋',
        url: 'http://www.ytmp3.cn/down/31468.mp3',
	  },
	  {
        name: '泡沫',
        artist: '邓紫棋',
        url: 'http://www.ytmp3.cn/down/16843.mp4',
	  },
	  {
        name: '痒',
        artist: '黄龄',
        url: 'http://www.ytmp3.cn/down/48513.mp3',
	  }			  
    ]
});