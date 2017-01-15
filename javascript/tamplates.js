var htmlTemplates = {
    tab:   '<a id="tab-{tab.id}" class="item bands-tab" data-tab="bands-{tab.lang}" >\
                {tab.langUpper}<span class="ui label">{tab.badge}</span>\
            </a>',

    bandsWrapper: '<div class="ui tab" data-tab="bands-{band.lang}" ></div>',

    band:  '<div id="band-{band.id}" class="ui title band-content-header">\
                <h3 class="ui center aligned header" >{band.name}<span class="ui circular label">{band.badge}</span></h3>\
            </div>\
            <div class="ui content band-content-wrapper" >\
                <div class="accordion">\
                   {songs.html}\
                </div>\
            </div>',

    song:  '<div id="song-{song.id}" class="ui title song-content-header">\
                <h4 class="ui center aligned header">{song.title}</h4>\
            </div>\
            <div class="ui content left aligned container song-content-wrapper">\
                {song.content}\
            </div>'
};