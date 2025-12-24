// SoundManager.js
class SoundManager {
  constructor() {
    this.musicEnabled = true;
    this.sfxEnabled = true;

    this.currentMusic = null;
    this.currentTrackIndex = 0;
    
    // Add progress checking interval
    this.checkInterval = null;
    this.checkIntervalMs = 1000; // Check every second

    // --- SOUND EFFECTS ---
    this.sfx = {
      cardFlip: new Audio(
        "https://ik.imagekit.io/greenraven/Green%20Raven/Card%20Flip"
      ),
      buttonClick: new Audio(
        "https://ik.imagekit.io/greenraven/Green%20Raven/Button%20Click?updatedAt=1766400501260"
      ),
    };

    Object.values(this.sfx).forEach((sound) => {
      sound.volume = 0.35;
      sound.preload = "auto";
    });

    // --- BACKGROUND MUSIC TRACKS (ORDER MATTERS) ---

    this.musicPlaylist = [
      new Audio(
        "https://ik.imagekit.io/greenraven/Green%20Raven/PageMusic.mp3"
      ),
      new Audio(
        "https://ik.imagekit.io/greenraven/Green%20Raven/WhatsApp%20Audio%202025-12-23%20at%2029.41%20PM.mp4?updatedAt=1766502700179"
      ),
      new Audio(
        "https://ik.imagekit.io/greenraven/Green%20Raven/WhatsApp%20Audio%202025-12-23%20at%204.29.42%20PM.mp4?updatedAt=1766502704984"
      ),
    ];

    // Configure playlist tracks
    this.musicPlaylist.forEach((track, index) => {
      track.loop = false;
      track.volume = 0;
      track.preload = "auto";

      // Add multiple event listeners for better compatibility
      track.addEventListener("ended", () => {
        this.handleTrackEnd();
      });
      
      // For browsers that don't fire 'ended' reliably
      track.addEventListener("timeupdate", () => {
        this.handleTimeUpdate(track);
      });
    });
  }

  /* ---------- TRACK END HANDLING ---------- */

  handleTrackEnd() {
    if (this.musicEnabled && this.currentMusic) {
      this.playNextTrack();
    }
  }

  // Fallback method: manually check if track has finished
  handleTimeUpdate(track) {
    // Check if we're near the end of the track (within 0.5 seconds)
    if (track.duration && track.currentTime > track.duration - 0.5) {
      this.handleTrackEnd();
    }
  }

  // Start periodic checking for track completion
  startTrackCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
    
    this.checkInterval = setInterval(() => {
      if (this.currentMusic && this.currentMusic.duration) {
        // Check if track has ended or errored
        if (this.currentMusic.ended || 
            this.currentMusic.error || 
            (this.currentMusic.currentTime >= this.currentMusic.duration - 0.1)) {
          this.handleTrackEnd();
        }
      }
    }, this.checkIntervalMs);
  }

  stopTrackCheck() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }

  /* ---------- SFX ---------- */

  playSFX(name) {
    if (!this.sfxEnabled) return;
    const sound = this.sfx[name];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  /* ---------- MUSIC CONTROLS ---------- */

  playMusic(index = 0) {
    if (!this.musicEnabled) return;

    const track = this.musicPlaylist[index];
    if (!track) return;

    if (this.currentMusic) {
      this.stopMusic();
    }

    this.currentTrackIndex = index;
    this.currentMusic = track;

    // Reset track to beginning if it was already played
    track.currentTime = 0;

    track.play().then(() => {
      this.fadeMusicIn(track);
      // Start checking for track completion
      this.startTrackCheck();
    }).catch((error) => {
      console.error("Failed to play music:", error);
    });
  }

  playNextTrack() {
    if (!this.musicEnabled) return;

    // Stop current track completely
    if (this.currentMusic) {
      this.currentMusic.pause();
      this.currentMusic.currentTime = 0;
    }

    // Calculate next track index
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.musicPlaylist.length;

    // Get and play next track
    const nextTrack = this.musicPlaylist[this.currentTrackIndex];
    if (nextTrack) {
      this.currentMusic = nextTrack;
      this.currentMusic.currentTime = 0;
      
      this.currentMusic.play().then(() => {
        this.fadeMusicIn(this.currentMusic);
        this.startTrackCheck();
      }).catch((error) => {
        console.error("Failed to play next track:", error);
        // Try the next track if this one fails
        setTimeout(() => this.playNextTrack(), 1000);
      });
    }
  }

  stopMusic() {
    if (!this.currentMusic) return;

    this.stopTrackCheck();
    
    this.fadeMusicOut(this.currentMusic, () => {
      this.currentMusic.pause();
      this.currentMusic.currentTime = 0;
      this.currentMusic = null;
    });
  }

  /* ---------- FADES ---------- */

  fadeMusicIn(track, targetVolume = 0.5, speed = 0.01) {
    if (!track) return;
    
    track.volume = 0;

    const fade = setInterval(() => {
      if (!track || track.volume >= targetVolume) {
        clearInterval(fade);
      } else {
        track.volume = Math.min(track.volume + speed, targetVolume);
      }
    }, 50);
  }

  fadeMusicOut(track, callback) {
    if (!track) return;
    
    const fade = setInterval(() => {
      if (!track || track.volume <= 0.01) {
        clearInterval(fade);
        if (track) {
          track.volume = 0;
        }
        callback?.();
      } else {
        track.volume -= 0.01;
      }
    }, 50);
  }

  /* ---------- ENABLE / DISABLE ---------- */

  enableMusic() {
    this.musicEnabled = true;
  }
  
disableMusic() {
  this.musicEnabled = false;
  
  // Immediately stop any playing music
  if (this.currentMusic) {
    this.stopTrackCheck();
    this.currentMusic.pause();
    this.currentMusic.currentTime = 0;
    this.currentMusic.volume = 0;
    this.currentMusic = null;
  }
}

  enableSFX() {
    this.sfxEnabled = true;
  }

  disableSFX() {
    this.sfxEnabled = false;
  }
  
  // Cleanup method
  cleanup() {
    this.stopTrackCheck();
    if (this.currentMusic) {
      this.currentMusic.pause();
      this.currentMusic = null;
    }
  }
}

export const soundManager = new SoundManager();