CREATE TABLE notes(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    folderid INTEGER REFERENCES folders(id)  ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    modified DATE
)