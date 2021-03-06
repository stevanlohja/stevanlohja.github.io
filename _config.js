module.exports = {
  /** Site MetaData (Required all)*/
  title: `Stevan.Lohja`,                           // (* Required)
  description: `Dev Rel & Tech Writer`, // (* Required)
  author: `Stevan Lohja`,                         // (* Required)
  language: 'en-US',                            // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://stevanlohja.github.io',       // (* Required) 
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Dev Rel, Full Stack Tech Writer',
  name: 'Stevan Lohja',
  company: '',
  location: 'USA',
  email: 'stevanio@protonmail.com',
  website: 'https://stevanlohja.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: 'https://www.linkedin.com/in/stevanlohja/',                                     // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  twitter: 'https://www.twitter.com/stevanlohja', // ex.'https://www.instagram.com/junhobaik'
  github: 'https://github.com/stevanlohja',           // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: 'stev',   // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  // googleAnalytics: 'UA-103592668-4',                                  // Google Analytics TrackingID. ex.'UA-123456789-0'
  // googleSearchConsole: 'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo', // content value in HTML tag of google search console ownership verification 
  // googleAdsenseSlot: '5214956675',                                    // Google Adsense Slot. ex.'5214956675'
  // googleAdsenseClient: 'ca-pub-5001380215831339',                     // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};