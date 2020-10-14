import {h} from 'preact';
import {TeamBubbles} from './';
import {seed} from '../../_data/seed-data';

export default {
  title: 'Team Bubbles'
};

const props = {
  "_key": "0480d59adb49",
  "_type": "teamBubbles",
  "teammates": [
    {
      "_createdAt": "2020-08-18T03:43:47Z",
      "_id": "c373bcba-eb61-4392-a825-f55175fc38d6",
      "_rev": "Nl0oDx4Kg56LBJXHuLsEyP",
      "_type": "person",
      "_updatedAt": "2020-08-18T03:43:47Z",
      "email": "yesin@uber.com",
      "image": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-08-18T03:43:39Z",
          "_id": "image-ecb8e599a75ada2c4e7fa6009ab20dda55a6d21f-500x500-jpg",
          "_rev": "Nl0oDx4Kg56LBJXHuLsEvT",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-08-18T03:43:39Z",
          "assetId": "ecb8e599a75ada2c4e7fa6009ab20dda55a6d21f",
          "extension": "jpg",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1,
              "height": 500,
              "width": 500
            },
            "hasAlpha": false,
            "isOpaque": true,
            "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAUHBAYI/8QAIhAAAQQDAQACAwEAAAAAAAAAAQACAwQFBhEhEjEyQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAABAAIRITH/2gAMAwEAAhEDEQA/AL+mlbXrySv/ABYPkVFa1ssOZmliZH8Cz6970KM3Tb8FhaVitlL8cUz4yBGPXe/4q/0jctfweSa+/kGgTt4wgeAfolBHtbBhxpftfbecRYeKylHJUmWaNmKaB/09ruhE+Urg/fMnayezX7FyQvlMhHf4FB15HOeOknngRFenb7rmxZXH41sFO5JFEHE/EHzqIiYeRv/Z",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#3d4256",
                "foreground": "#fff",
                "population": 0.56,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#21040c",
                "foreground": "#fff",
                "population": 0,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#d4afb2",
                "foreground": "#000",
                "population": 0.83,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#d4afb2",
                "foreground": "#000",
                "population": 0.83,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#e7f4f2",
                "foreground": "#000",
                "population": 0.03,
                "title": "#000"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#9a746c",
                "foreground": "#fff",
                "population": 0.05,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#e31b52",
                "foreground": "#fff",
                "population": 0,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/jpeg",
          "originalFilename": "yesin.jpg",
          "path": "images/0eq54p9g/production/ecb8e599a75ada2c4e7fa6009ab20dda55a6d21f-500x500.jpg",
          "sha1hash": "ecb8e599a75ada2c4e7fa6009ab20dda55a6d21f",
          "size": 38574,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJwZXJzb24veWVzaW4iLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "J6xIpH3R78ma4kXzoBa9N6FGfyHrliue",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/ecb8e599a75ada2c4e7fa6009ab20dda55a6d21f-500x500.jpg"
        }
      },
      "linkedin": "https://www.linkedin.com/in/yesin/",
      "name": "Dmitry Yesin",
      "title": "Engineering Manager"
    },
    {
      "_createdAt": "2020-08-18T04:21:46Z",
      "_id": "ec9a79b7-b99e-44f6-bf4e-d6af51dbadf9",
      "_rev": "p5qDbPIEHEbFy8UEZByw9A",
      "_type": "person",
      "_updatedAt": "2020-08-18T04:21:46Z",
      "description": "Is a extremely strong lead developer.  He solo champion projects like Uber.com/legal and uber.com/airports",
      "image": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-08-18T04:21:44Z",
          "_id": "image-4becfe8e2fd83c3a801efa15db83b2b3b648d421-892x694-png",
          "_rev": "p5qDbPIEHEbFy8UEZByw00",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-08-18T04:21:44Z",
          "assetId": "4becfe8e2fd83c3a801efa15db83b2b3b648d421",
          "extension": "png",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1.2853025936599423,
              "height": 694,
              "width": 892
            },
            "hasAlpha": true,
            "isOpaque": true,
            "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAEaUlEQVQ4yyWS2VPTZxiFf3d22qp0XDourYhKUZZAwhYQJUIQ1BAkRBZRspCEpYBghBA2A8EF2SvDWGldLgBbccZOO0Oxam2ruCvTKopVBBcEcZn+A08/9eLMe/d853znSONv3vBo+hUjky+5NzHF3edT3B6boH/wJvUtHaRuNbBh02bU8RpU6gT028zs7TzO6Sv3GRh+yS933mma8w9eM/j4LdLz/94K4DR3n00yNP6Cm6PPGBi8wZ6mVjTaJIIVwQT4+ePj7Y3nEk+WLV+BWjxQ+833nBq8J6CTnBuZ5uKj11wdf4M0/nqa+xPvQE+5PDJO/+VbNLR1oEtKQu63Cp9lS/FcvIj5c+fgMWsmn37yMfPmzScmIZGGw93033rIpYdTXB2b5saTV0hDo2NcfzDKtQeP+evOCN/19mExm0lZr2JLbBSxITJ8vZawaN5cPpv9AfjRjBksWvwlhtxCTp69yLXRCW4/ffle0jtHA1eHuDA0zK+XP0Q1pKbg/jqLbyvzKc/UkhgeRIi3FysWL2ChcDpTQGfNno16g4ajfae5Pf6c4clX3JsSDk8M/MEPZ/6k7/wlevrPU9vQhKPAys+dbq71tNFbV0xFhpYMVQRqhYzQld588fl8PDw8UMUl0HWij+uPnvC36GD4xRTSoe4THDzeTduxHlqO9uBqaGb/bgcDRxq5dLyZH+t34jbq2S7iayJCWB+mIGC5FwsENH6TlkO9pzkz9C/n/nnMhbtjSNbCPIx5NjKtNtKzc0g3minOM9PuzKe9xMw+SxrZ8dFEB6wiOtCXBKWCMD8fvJd6sjklneZjpzh29iZHfhM6cwNJoQwhKDQYP7kcH1kQAWImqUkJHLBn0+nIpbnQjDkhBnWQPxvD5GijwlgrDyBUJiM1PQtn4yFcXX1UHz6Js7MXSblaSbAyDH+Fgq8CAvENlJOm09DdUsWV7oP81FJHaZqOrWsjRew16KMjiYsIJW7dOtINFiwOF7aaA9hqWzBVNyLl5JkwWoykZGYSr9OjTtZjslk40lzD7137RSllFGg3ohNJUqLC0QiHcVFKtMk6theVYXLWY6zYi6Gqge2V+5F2OUooKS8lv9yJaZeDLHs5eRXV1NdV0OXaQUuhgazYtcTK/IgRLUeHBqGKDCM5LQOL0y2ctWJxtWAR1yyu5Nhdw46qanIEJNtZg6XSRW51HSVVleyr2EFTgQGrGHmszJ8IAQ0L9CMiRE5icgrGXTXvo9rqWslxt5Nb347U1nWY6qZm8mtqMZVXYXBUClVhLqvA7rDjKrKSq11PnCKQ8ABfgoXCA/1RRavYtNVCalEFWeVuLLsbyXW3ItUf2EOlu1a4rMJWKiIX7ySzSKi4TDh2YXc6KcraQmJUMJFiNhEyX5RiQoH+MlaFrEERoyE2zYC+UPxn5R6kJDGRzG2pWHOtZOflkGEykWbKJr3ATpa7A3tjBy57DsYNq1EH+6GSC6j/SryXeTN3oRdzFnri6RtEpEaPrqCU/wHPEOpXLkC9EQAAAABJRU5ErkJggg==",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#4a3a35",
                "foreground": "#fff",
                "population": 9.07,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#427490",
                "foreground": "#fff",
                "population": 0.01,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#4a3a35",
                "foreground": "#fff",
                "population": 9.07,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#a0b6c2",
                "foreground": "#000",
                "population": 7.31,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#d4b198",
                "foreground": "#000",
                "population": 2.06,
                "title": "#fff"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#688695",
                "foreground": "#fff",
                "population": 2.23,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#34789c",
                "foreground": "#fff",
                "population": 0,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/png",
          "originalFilename": "Marc-Balaban.png",
          "path": "images/0eq54p9g/production/4becfe8e2fd83c3a801efa15db83b2b3b648d421-892x694.png",
          "sha1hash": "4becfe8e2fd83c3a801efa15db83b2b3b648d421",
          "size": 972422,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJwZXJzb24vTWFyYy1CYWxhYmFuIiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "7ziXg9isZzaf5vQmGiUFfaK4u2xNBKau",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/4becfe8e2fd83c3a801efa15db83b2b3b648d421-892x694.png"
        }
      },
      "linkedin": "https://www.linkedin.com/in/marcbalaban/",
      "name": "Marc Balaban",
      "title": "Sr. Software Engineer"
    },
    {
      "_createdAt": "2020-08-18T04:23:45Z",
      "_id": "27263a07-7dee-4f84-bae8-23b5e3b0dce0",
      "_rev": "Nl0oDx4Kg56LBJXHuLseZ2",
      "_type": "person",
      "_updatedAt": "2020-08-18T04:23:45Z",
      "image": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-08-18T04:23:42Z",
          "_id": "image-13ff131e4afde27a49be7fe9337e474cece5fcc3-450x450-jpg",
          "_rev": "Nl0oDx4Kg56LBJXHuLseW6",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-08-18T04:23:42Z",
          "assetId": "13ff131e4afde27a49be7fe9337e474cece5fcc3",
          "extension": "jpg",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1,
              "height": 450,
              "width": 450
            },
            "hasAlpha": false,
            "isOpaque": true,
            "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAYDBAX/xAAkEAABBAEDBAMBAAAAAAAAAAABAAIDBAUGERITIUFxFCKRwf/EABUBAQEAAAAAAAAAAAAAAAAAAAQF/8QAGhEBAAMBAQEAAAAAAAAAAAAAAQACERIDMf/aAAwDAQACEQMRAD8Ay0Pi8XfOSt5mB0sNaDqcWlUekcfpzMfLYcI+pYZEZWcn8uTfB9qK0pqinpyG+3IRSTstRdNjG/1Uek9Z4jFGQWhu6xGWtfH34A+Cg0HAz7KXpm2dxMkHartNiTcHs4gfqLay4PsSOYfq5xI9boh9MZyTxGgWgHTDcg7dl3VaMDW8g07+0RJbIYMPyLqTdzQT5RERIqf/2Q==",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#603d2b",
                "foreground": "#fff",
                "population": 6.2,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#643112",
                "foreground": "#fff",
                "population": 0.86,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#603d2b",
                "foreground": "#fff",
                "population": 6.2,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#ceb4a4",
                "foreground": "#000",
                "population": 0.12,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#d4a49c",
                "foreground": "#000",
                "population": 0,
                "title": "#fff"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#b28167",
                "foreground": "#fff",
                "population": 3.19,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#aa6d51",
                "foreground": "#fff",
                "population": 5.53,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/jpeg",
          "originalFilename": "ryan-wong.jpg",
          "path": "images/0eq54p9g/production/13ff131e4afde27a49be7fe9337e474cece5fcc3-450x450.jpg",
          "sha1hash": "13ff131e4afde27a49be7fe9337e474cece5fcc3",
          "size": 62228,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJwZXJzb24vcnlhbi13b25nIiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "VsLXphpKAYguN5pYpkY1WXzsdScoY3Lu",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/13ff131e4afde27a49be7fe9337e474cece5fcc3-450x450.jpg"
        }
      },
      "name": "Ryan Wong",
      "title": "Software Engineer"
    },
    {
      "_createdAt": "2020-08-18T04:30:21Z",
      "_id": "5e51530a-63ab-4778-b60b-61e33316d4f8",
      "_rev": "8eXgUYrFRfLeDQJ5GPXOfy",
      "_type": "person",
      "_updatedAt": "2020-08-18T04:30:21Z",
      "description": "Ruby lifts team members, owns projects, and has a laser sharp focus on the details.\nI've worked with Ruby for nearly 2 years on Uber.com.\nUber.com collaborated with over 10 lines of business(LoB) and each LoB had many stakeholders and each stakeholder had 10 new ideas daily (bit hyperbole). Luckily, with Ruby, I never had to filter the signal from the noise and when Ruby gave me tasks and projects, I could always trusted that they were properly vetted.",
      "image": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-08-18T04:30:20Z",
          "_id": "image-4b8999a9fb7f9dc44bcf7be8995dc80741c68bd7-450x450-jpg",
          "_rev": "Nl0oDx4Kg56LBJXHuLskDp",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-08-18T04:30:20Z",
          "assetId": "4b8999a9fb7f9dc44bcf7be8995dc80741c68bd7",
          "extension": "jpg",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1,
              "height": 450,
              "width": 450
            },
            "hasAlpha": false,
            "isOpaque": true,
            "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAgMH/8QAJhAAAQMDBAEEAwAAAAAAAAAAAQIDBAAFBhESISITBxQxQUJhgf/EABgBAAIDAAAAAAAAAAAAAAAAAAQFAgMG/8QAHxEAAgICAQUAAAAAAAAAAAAAAAECAwQRMxIhQUKB/9oADAMBAAIRAxEAPwDnGHXK45XkCYEu4KSlaCpTpRuIqxioDF8kwJ63B7dRAV4/kfR/tZMYxdcayq1SCwI7EnUtgHsU/upFtckXrNLpHfSfJr1B4OgoC2tvbS7F0VHo17E5rOfZIEeOHVNN8ArTzSrg4Gh7u6hW8/PbSlL3jYre3EmpXeCzyt5cj1aQy6dWmYgLafoVAtkRpWdyXNu1aWFLBHHNKU/s4AeHL8NjS3Vp3KedJ1P5GlKVmmMEkf/Z",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#49422f",
                "foreground": "#fff",
                "population": 7.19,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#67590f",
                "foreground": "#fff",
                "population": 0.19,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#49422f",
                "foreground": "#fff",
                "population": 7.19,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#c7ac8a",
                "foreground": "#000",
                "population": 6.14,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#f5be94",
                "foreground": "#000",
                "population": 1.83,
                "title": "#000"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#91794e",
                "foreground": "#fff",
                "population": 6.54,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#dcb128",
                "foreground": "#000",
                "population": 1.1,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/jpeg",
          "originalFilename": "ruby.jpg",
          "path": "images/0eq54p9g/production/4b8999a9fb7f9dc44bcf7be8995dc80741c68bd7-450x450.jpg",
          "sha1hash": "4b8999a9fb7f9dc44bcf7be8995dc80741c68bd7",
          "size": 50603,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJwZXJzb24vcnVieSIsInJlc291cmNlX3R5cGUiOiJpbWFnZSIsInR5cGUiOiJ1cGxvYWQifQ==",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "rvYPQLR6SXo3j4q36L342IDLhPqWoQzJ",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/4b8999a9fb7f9dc44bcf7be8995dc80741c68bd7-450x450.jpg"
        }
      },
      "linkedin": "https://www.linkedin.com/in/rubyhanh/",
      "name": "Ruby Williams",
      "title": "Program Management"
    },
    {
      "_createdAt": "2020-05-23T04:10:03Z",
      "_id": "882ead12-ffb9-4be6-b9cd-3c487dc3836c",
      "_rev": "r0jjuSeoF6yf0e1Q5gx27a",
      "_type": "person",
      "_updatedAt": "2020-05-23T04:10:03Z",
      "description": "I've been fortunate to work with Wasif at R/GA and Uber. Wasif is an incredibly hard worker, detail, and performance oriented.  I couldn't recommend him enough.",
      "image": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-05-23T04:07:53Z",
          "_id": "image-df93ecbc82e1abd54bcefeaf049a7b29af273988-499x499-jpg",
          "_rev": "r0jjuSeoF6yf0e1Q5gx0zV",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-05-23T04:07:53Z",
          "assetId": "df93ecbc82e1abd54bcefeaf049a7b29af273988",
          "extension": "jpg",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 1,
              "height": 499,
              "width": 499
            },
            "hasAlpha": false,
            "isOpaque": true,
            "lqip": "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUEAwYH/8QAJhAAAQQBAgUFAQAAAAAAAAAAAQACAwQFESEGEhMiQRUxMlFhwf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/EACARAAICAgICAwAAAAAAAAAAAAECAAMEIRExBRJRYXH/2gAMAwEAAhEDEQA/AL2eghxWKmsQVmdct7ACdionBl/N1bLIcrbLo5muLHA6aO8BZrufnz+Oihrxywya8jQ8f1XYuHbeMwYu5C7BFZhZ2RvIcX/iTGwb7grjgKx433Du8hjUe1b7Yb/JfGQyrQADFp9l+5RceJv0JqET78DDYI7uX2RC9JRirHYipaHUMvRnm2Sc6tOzouIA3A8LUyL1KOOS1JK5x3+Z0CIroyLURQrEa+TNC41LlmdAT9gTsddvJAxrSQNERETEkkmDwBoT/9k=",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#2d374d",
                "foreground": "#fff",
                "population": 1.12,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#0c2c89",
                "foreground": "#fff",
                "population": 0.45,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#0782f6",
                "foreground": "#fff",
                "population": 6.21,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#ccc2b7",
                "foreground": "#000",
                "population": 1.49,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#ddb49d",
                "foreground": "#000",
                "population": 4.41,
                "title": "#fff"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#97786a",
                "foreground": "#fff",
                "population": 1.85,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#0782f6",
                "foreground": "#fff",
                "population": 6.21,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/jpeg",
          "originalFilename": "Wasif_logadm.jpg",
          "path": "images/0eq54p9g/production/df93ecbc82e1abd54bcefeaf049a7b29af273988-499x499.jpg",
          "sha1hash": "df93ecbc82e1abd54bcefeaf049a7b29af273988",
          "size": 109755,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJwZXJzb24vV2FzaWZfbG9nYWRtIiwicmVzb3VyY2VfdHlwZSI6ImltYWdlIiwidHlwZSI6InVwbG9hZCJ9",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "COJnNPpnWLmlMQv1lbK8mVxtSC8RYcBt",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/df93ecbc82e1abd54bcefeaf049a7b29af273988-499x499.jpg"
        }
      },
      "linkedin": "https://www.linkedin.com/in/wzaman1/detail/photo/",
      "name": "Wasif Zaman",
      "title": "Software Engineer"
    },
    {
      "_createdAt": "2020-08-18T04:34:04Z",
      "_id": "de9e4c27-df29-48ff-8977-2cf31e4eae51",
      "_rev": "Nl0oDx4Kg56LBJXHuLsoGo",
      "_type": "person",
      "_updatedAt": "2020-08-18T04:34:43Z",
      "description": "I am a generalist; slowly becoming a specialist in Web Development. I mix art, design, and technology, to create effective experiences that deliver value at scale.\n\nMy professional goals are simple: surround myself with smart, energetic, creative people while working on solving problems that matter.",
      "email": "matthhar12@gmail.com",
      "image": {
        "_type": "image",
        "asset": {
          "_createdAt": "2020-08-18T04:34:25Z",
          "_id": "image-15bf7fce11a7f9cdc578cc4fff214d16a72d3182-337x450-png",
          "_rev": "8eXgUYrFRfLeDQJ5GPXYdO",
          "_type": "sanity.imageAsset",
          "_updatedAt": "2020-08-18T04:34:25Z",
          "assetId": "15bf7fce11a7f9cdc578cc4fff214d16a72d3182",
          "extension": "png",
          "metadata": {
            "_type": "sanity.imageMetadata",
            "dimensions": {
              "_type": "sanity.imageDimensions",
              "aspectRatio": 0.7488888888888889,
              "height": 450,
              "width": 337
            },
            "hasAlpha": true,
            "isOpaque": true,
            "lqip": "data:image/png;base64,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",
            "palette": {
              "_type": "sanity.imagePalette",
              "darkMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#2e3d4f",
                "foreground": "#fff",
                "population": 1.37,
                "title": "#fff"
              },
              "darkVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#2f4565",
                "foreground": "#fff",
                "population": 3.19,
                "title": "#fff"
              },
              "dominant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#927267",
                "foreground": "#fff",
                "population": 4.03,
                "title": "#fff"
              },
              "lightMuted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#c3b2b2",
                "foreground": "#000",
                "population": 1.57,
                "title": "#fff"
              },
              "lightVibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#d9bdaf",
                "foreground": "#000",
                "population": 0.47,
                "title": "#fff"
              },
              "muted": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#927267",
                "foreground": "#fff",
                "population": 4.03,
                "title": "#fff"
              },
              "vibrant": {
                "_type": "sanity.imagePaletteSwatch",
                "background": "#bc746c",
                "foreground": "#fff",
                "population": 0,
                "title": "#fff"
              }
            }
          },
          "mimeType": "image/png",
          "originalFilename": "me-hat.png",
          "path": "images/0eq54p9g/production/15bf7fce11a7f9cdc578cc4fff214d16a72d3182-337x450.png",
          "sha1hash": "15bf7fce11a7f9cdc578cc4fff214d16a72d3182",
          "size": 258159,
          "source": {
            "id": "eyJwdWJsaWNfaWQiOiJtZS1oYXQiLCJyZXNvdXJjZV90eXBlIjoiaW1hZ2UiLCJ0eXBlIjoidXBsb2FkIn0=",
            "name": "cloudinary:morningharwood"
          },
          "uploadId": "M7zIgr4Lz3W8ApxnJmhw35r7Qq3WZmqa",
          "url": "https://cdn.sanity.io/images/0eq54p9g/production/15bf7fce11a7f9cdc578cc4fff214d16a72d3182-337x450.png"
        }
      },
      "linkedin": "https://www.linkedin.com/in/morningharwood/",
      "name": "Matthew Harwood",
      "title": "Senior Design Engineer"
    }
  ]
};

export const Main = () => {
  return (<TeamBubbles {...props} />)
};
