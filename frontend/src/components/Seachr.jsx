import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";

const Search = ({ docs }) => {
  const navigate = useNavigate();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    // console.log(item);
    navigate(`./detail/${item.id}`);
    navigate(0);
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.username}
        </span>
      </>
    );
  };
  return (
    <div className="w-full z-10 ">
      <ReactSearchAutocomplete
        items={docs}
        className="focus:outline-none"
        fuseOptions={{ keys: ["username", "title"] }}
        resultStringKeyName="username"
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        styling={{
          backgroundColor: "#375470",
          color: "white",
          iconColor: "white",
          border: "red",
          hoverBackgroundColor: "#152f47",
          boxShadow: "red",
        }}
      />
    </div>
  );
};

export default Search;
