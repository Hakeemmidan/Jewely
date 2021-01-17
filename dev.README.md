---
## General flow of a feature

Checkout related [commands](#commands)

- Backend

1. Migration
- Gets generated when running migration command (`rails g migration <name_of_migration>`)
2. Model
- Under `app/models`
3. Associations
- Inside model files; e.g. `app/models/user.rb`
4. Validations
- Inside model files; e.g. `app/models/user.rb`
5. Routes
- Inside `config/routes.rb`
6. Controller
- Under `app/controllers/api`

- Frontend

7. API util
- Under `frontend/util`
8. Action creators
- Under `frontend/actions`
9. Thunk action creators
- Under `frontend/actions`
10. Reducers
- Under `frontend/reducers`
11. Mapping to components
- Under `frontend/components`
- If you're going to use Redux (use Redux if you need fetched info elsewhere in app)
- First create container for component, then create actual component file
- Check out `frontend/components/products/index/product_index_container.js` as an example
12. Style

- Most styling is inside `app/assets/stylesheets/application.scss`
- Don't get intimidated by the size of the file. CMD + F and the browser DOM tree are your best friend here. You should mostly be looking at styling through the browser and modifying to the file as needed.
---

## Commands

### Backend

Install gems:

- `bundle install`

Start server:

- `rails s`

Go to Rails console:

- `rails c`
  - This can be helpful in testing association and checking out data and such

View available routes:

- `rails routes`

Generate controller:

- `rails g controller api/controller_name`
  - `controller_name` is plural

Generate model and migration:

- `rails g model model_name`
  - `model_name` is singular

Note: Automatic generation of helpers, javascripts, and scss files is turned off. If you want to add them back in remove these lines in `application.rb`:

```Ruby
config.generators do |generate|
  generate.helper false
  generate.assets false
end
```

### Frontend

Install dependencies:

- `npm i`

Start Webpack:

- `npm start`

Parse frontend linting errors/warnings:

- `eslint frontend` (assuming you're in root directory)

---

## Redux Global State (frontend)

```JSON
{
  "entities": {
    "users": {
      "115": {
        "id": 115,
        "username": "demoUser",
        "products": [
          {
            "id": 179,
            "title": "Example Product-1 Title!",
            "description": "This is a sample description of product1",
            "price": "123.0",
            "seller_id": 115,
            "created_at": "2019-10-30T00:23:05.847Z",
            "updated_at": "2021-01-10T15:48:01.721Z",
            "seller_username": "demoUser",
            "category_id": 1
          }
        ]
      }
    },
    "products": {
      "179": {
        "id": 179,
        "title": "Example Product-1 Title!",
        "description": "This is a sample description of product1",
        "price": "123.0",
        "seller_id": 115,
        "created_at": "2019-10-30T00:23:05.847Z",
        "updated_at": "2021-01-10T15:48:01.721Z",
        "seller_username": "demoUser",
        "category_id": 1,
        "photoFiles": [
          {
            "id": 348,
            "name": "photos",
            "record_type": "Product",
            "record_id": 163,
            "blob_id": 362,
            "created_at": "2019-10-29T06:28:46.860Z"
          }
        ],
        "photoUrls": [
          "/rails/active_storage/blobs/someRandomCharactersToIDPhoto"
        ]
      },
      ...
    },
    "carts": {
      "cartLocalStorage": [
        ["<product1-id>", "<product1-quantity>"],
        ["<product2-id>", "<product2-quantity>"]
      ]
    },
    "reviews": {},
    "categories": [
      {
        "id": 1,
        "name": "Bracelets"
      },
      {
        "id": 2,
        "name": "Necklaces"
      },
      {
        "id": 3,
        "name": "Rings"
      },
      ...
    ]
  },
  "session": {
    "id": 115
  },
  "ui": {
    "modal": "<name-of-opened-modal>",
    "filters": {
      "search": "<search content collected here>"
    },
    "drawer": {
      "closeDirection": "<open-drawer-close-dir>",
      "drawerType": "<open-drawer-type>",
      "openDirection": "<open-drawer-open-dir>"
    }
  },
  "errors": {
    "session": ["<session-related-error1>"],
    "product": ["<product-related-error1>"],
    "review": ["..."]
  }
}
```

Also, `redux-logger` should be activated during development, and should `console.log`
Redux global state on each action dispatch. This should be very helpful in understanding the
Redux global state shape.
