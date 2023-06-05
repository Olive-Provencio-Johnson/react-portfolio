import React from 'react';
import './Photo.css';
import OliveAvatar from '../../assets/OliveAvatar.png';

console.log(OliveAvatar);

function photo() {
  return <img src={OliveAvatar} alt="Photo" />;
}