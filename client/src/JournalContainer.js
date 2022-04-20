import React, { useEffect, useState } from "react";

function JournalContainer({ user, id, journalId, journal, setJournal }) {
  const [wishlist, setWishlist] = useState("");
  const [itenerary, setItenerary] = useState("");
  const [other, setOther] = useState("");
  // const [journal, setJournal] = useState({});

  useEffect(() => {
    setWishlist(journal.wishlist);
    setItenerary(journal.itenerary);
    setOther(journal.other);
  }, [user]);

  const handleJournalUpdate = (e) => {
    e.preventDefault();
    // e.target.reset("");
    fetch(`/journals/${journalId}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        wishlist: wishlist,
        itenerary: itenerary,
        other: other,
      }),
    })
      .then((r) => r.json())
      // .then((json) => console.log(json))
      .then(setJournal);
    // setWishlist("");
    // setItenerary("");
    // setOther("");
  };

  return (
    <>
      <div className="journal-body">
        <ul className="list">
          <div className="lines"></div>
          <br />
          <form onSubmit={handleJournalUpdate}>
            <label>Dream Vacays </label>
            <input
              className="list-li"
              type="text"
              size="50"
              name="wishlist"
              defaultValue={wishlist}
              onChange={(e) => setWishlist(e.target.value)}
            />
            <li className="journal-entry">{journal.wishlist}</li>
            <br />

            <label>Travel Itenerary </label>
            <input
              className="list-li"
              type="text"
              size="50"
              name="itenerary"
              defaultValue={itenerary}
              onChange={(e) => setItenerary(e.target.value)}
            />
            <br className="journal-entry" />

            <li className="journal-entry">{journal.itenerary}</li>
            <br />
            <label>Important Info </label>
            <input
              className="list-li"
              type="text"
              size="50"
              name="other"
              defaultValue={other}
              onChange={(e) => setOther(e.target.value)}
            />
            <li className="final-journal-entry">{journal.other}</li>
            <button type="submit" className="journal_button">
              Update Journal
            </button>
          </form>
        </ul>
        <br />
      </div>
    </>
  );
}

export default JournalContainer;
