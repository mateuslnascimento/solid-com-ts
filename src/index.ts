import ShareButton from './ShareButton';

const shareButton = new ShareButton('https://github.com/mateuslnascimento');

shareButton.bind('.btn-twitter', 'twitter');
shareButton.bind('.btn-facebook', 'facebook');
shareButton.bind('.btn-linkedin', 'linkedin');