# MVC Exercise

from week 6 demos folder

Notes about this exercise:
- You need to have your Tomcat server running before you run Angular, otherwise the functions in your `pokedex.service.ts` file will not work.
- You will need to go into the **PokeFront** folder and run `npm install` to grab all your needed dependencies. 
- The URLs are set as string variables in the `pokedex.service.ts` file, which is why the GET/POST requests have `${this.baseURL}/..` and `${this.pokeApi}/..`
- There's a warning that will pop up when you first run `ng serve-o`, saying that "the global version of Angular does not match with the local version of Angular". You can ignore this.
