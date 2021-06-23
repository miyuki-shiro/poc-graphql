# ✨ POC GraphQL✨ 

This project was built with [NodeJS](https://nodejs.org/es/), [GraphQL](https://graphql.org) and [An API of Ice and Fire](https://anapioficeandfire.com)

<br>

## 🔥 Getting Started

1. Clone this repository
2. Install JS dependencies: `npm install`
3. Run the project in local mode: `npm start`
> Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to interact in the browser with graphqlHTTP.

> Open [http://localhost:4000/playground](http://localhost:4000/playground) to interact in the browser with expressPlayground.

<br>

## 📌 Example Queries

### Houses

- Body: `{ Houses { name region coatOfArms } }`
- Response:
```json
{
  "data": {
    "Houses": [
      {
        "name": "House Algood",
        "region": "The Westerlands",
        "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      },
      {
        "name": "House Appleton of Appleton",
        "region": "The Reach",
        "coatOfArms": "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",
      },
      {
        "name": "House Baelish of Harrenhal",
        "region": "The Riverlands",
        "coatOfArms": "A field of silver mockingbirds, on a green field(Vert, semé of mockingbirds argent)",
      },
      ...
    ]
  }
}
```

### One House

- Body: `{ House(id: 362) { name region coatOfArms words titles } }`
- Response:
```json
{
  "data": {
    "House": {
      "name": "House Stark of Winterfell",
      "region": "The North",
      "coatOfArms": "A running grey direwolf, on an ice-white field",
      "words": "Winter is Coming",
      "titles": [
        "King in the North",
        "Lord of Winterfell",
        "Warden of the North",
        "King of the Trident"
      ]
    }
  }
}
```

### Characters

- Body: `{ Characters { name gender titles aliases playedBy } }`
- Response:
```json
{
  "data": {
    "Characters": [
      ...
      {
        "name": "Balon Greyjoy",
        "gender": "Male",
        "titles": [
          "Iron King",
          "King of the Isles and the North",
          "King of Salt and Rock",
          "Son of the Sea Wind",
          "Lord Reaper of Pyke",
          "The Greyjoy",
          "Captain of the Great Kraken"
        ],
        "aliases": [
          "Balon the Brave",
          "Balon the Blessed",
          "Balon the Twice Crowned",
          "Balon the Widowmaker",
          "The Kraken King"
        ],
        "playedBy": [ "Patrick Malahide" ]
      },
      {
        "name": "High Septon",
        "gender": "Male",
        "titles": [
          "High Septon",
          "His High Holiness",
          "Father of the Faithful",
          "Voice of the Seven on Earth"
        ],
        "aliases": [ "The High Sparrow" ],
        "playedBy": [ "Jonathan Pryce" ]
      },
      {
        "name": "Margaery Tyrell",
        "gender": "Female",
        "titles": [ "Queen of the Seven Kingdoms" ],
        "aliases": [
          "The Little Queen",
          "The Little Rose",
          "Maid Margaery"
        ],
        "playedBy": [ "Natalie Dormer" ]
      },
      ...
    ]
  }
}
```

### One Character

- Body: `{ Character(id: 583) { name gender titles aliases playedBy } }`
- Response
```json
{
  "data": {
    "Character": {
      "name": "Jon Snow",
      "gender": "Male",
      "titles": [ "Lord Commander of the Night's Watch" ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "playedBy": [ "Kit Harington" ]
    }
  }
}
```

### Books

- Body: `{ Books { name numberOfPages publisher released } }`
- Response:
```json
{
  "data": {
    "Books": [
      {
        "name": "A Game of Thrones",
        "numberOfPages": 694,
        "publisher": "Bantam Books",
        "released": "1996-08-01T00:00:00"
      },
      {
        "name": "A Clash of Kings",
        "numberOfPages": 768,
        "publisher": "Bantam Books",
        "released": "1999-02-02T00:00:00"
      },
      {
        "name": "A Storm of Swords",
        "numberOfPages": 992,
        "publisher": "Bantam Books",
        "released": "2000-10-31T00:00:00"
      },
      ...
    ]
  }
}
```


### One Book
- Body: `{ Book(id: 1) { name numberOfPages publisher country mediaType released } }`
- Response:
```json
{
  "data": {
    "Book": {
      "name": "A Game of Thrones",
      "numberOfPages": 694,
      "publisher": "Bantam Books",
      "country": "United States",
      "mediaType": "Hardcover",
      "released": "1996-08-01T00:00:00"
    }
  }
}
```