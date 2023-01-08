## React Social Media With SCSS

* Vite Tool
* Google Fonts: Roboto
* [Sass Package](https://www.npmjs.com/package/sass)
* [React Router](https://reactrouter.com/en/main)
* Protected Route
* Navbar, Sidebar, Feed, Rightbar
* DarkMode using sass functionality

## dark mode sass function

```scss
@mixin themify($themes) {
    @each $theme, $map in $themes {
        .theme-#{$theme} & {
        $theme-map: () !global;
        @each $key, $submap in $map {
            $value: map-get(map-get($themes, $theme), "#{$key}");
            $theme-map: map-merge(
            $theme-map,
            (
                $key: $value,
            )
            ) !global;
        }
        @content;
        $theme-map: null !global;
        }
    }
}
  
@function themed($key) {
    @return map-get($theme-map, $key);
}

```

## Dark Mode context
* first we write dark mode function with React Context, useEffect, useState
* import the dark mode provider into **main jsx**
* get dark mode context into **App jsx**
* Then use dark mode into Layout with SASS
* get the toggle function into navbar component
* in the icon use **conditional onClick toggle** function for dark mode

## Authentication Context
* first we write Authentication function with React Context, useEffect, useState same as Dark Mode
* import the Auth provider into **main jsx**
* get Auth context into **App jsx**
* import login context into login page & make it functional with **onClick(handleLogin)**
* Then we make a static user data for login into home page
* we can use static data to show user info in the navbar
* so when we click the login button from login page it get static data from Auth Context which is temporary data
* we can get this static data by Auth Context and use this data to dynamic use credentials

```js
setCurrentUser({
        id: 1,
        name: "Mahmudul Hasan",
        profilePic: "https://source.unsplash.com/iEEBWgY_6lA"
    })
```

```js
//Auth Context
const {currentUser} = useContext(AuthContext)
```

```js
    <img src={currentUser.profilePic} alt="avatar" />
    <span>{currentUser.name}</span>
```

