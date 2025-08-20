const filterList = users
    .filter((item) => {
      const Gender = !filters.gender || item.gender == filters.gender;
      // console.log(Gender, " GENDER");
      const Country = !filters.country || item.country == filters.country;
      // console.log(Country, " country");
      const Language =
        !filters.language || item.language.includes(filters.language);
      return Gender && Country && Language;
    })
    .filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchItem.toLowerCase())
    );
    <div className="flex justify-center items-center p-10">
    <div className="text-lg">
      <Select
        name="gender"
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        options={genderOptions}
        className="w-[200px] mt-2 cursor-pointer"
      />
    </div>
    <div className="text-lg m-3">
      {/* <select
        className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
        name="country"
        onChange={(e) =>
          setFilters({ ...filters, country: e.target.value })
        }
      >
        <option value="">Select Country</option>
        <option value="usa">USA</option>
        <option value="india">India</option>
        <option value="china">China</option>
      </select> */}
       <Select
        name="country"
        value={filters.country}
        onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        options={countryOptions}
        className="w-[200px] mt-2 cursor-pointer"
      />
    </div>
    <div className="text-lg m-3">
      {/* <select
        className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
        name="language"
        onChange={(e) =>
          setFilters({ ...filters, language: e.target.value })
        }
      >
        <option value="">Select Language</option>
        <option value="hindi">Hindi</option>
        <option value="english">English</option>
        <option value="gujarati">Gujarati</option>
      </select> */}
       <Select
        name="language"
        value={filters.language}
        onChange={(e) => setFilters({ ...filters,language: e.target.value })}
        options={languageOptions}
        className="w-[200px] mt-2 cursor-pointer"
      />
    </div>
    <div className="text-lg m-3">
      <input
        className="w-[200px] border-2 border-gray-400 rounded h-10 text-center mt-2 cursor-pointer"
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  </div> why language filter was not working 