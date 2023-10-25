import React, { useState, ChangeEvent } from "react";

interface TagInputProps {
  name: string;
  tags: string[]; // Ajout de la propriété "tags"
  onSave: (tags: string[], name: string) => void;
  onEdit: Object;
}

const TagInput: React.FC<TagInputProps> = ({ name, onSave }) => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [inputFocus, setInputFocus] = useState(false);

  const handleTagChange = (newTags: string[]) => {
    onSave(newTags, name);
  };

  const handleTagAdd = () => {
    if (tag.trim() !== "") {
      let newTag = tag;

      setTags([...tags, newTag]);
      setTag("");
      handleTagChange([...tags, newTag]);
    }
  };

  const handleTagRemove = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className="mb-4" key={name}>
      <label className="block text-gray-600 dark:text-white text-sm font-medium m-2">
        {name}
      </label>
      <div className="flex items-center space-x-2 px-2">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter some tags"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <span
          onClick={handleTagAdd}
          className="w-1/3 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Tag
        </span>
      </div>
      <div className="w-1/2 mx-2">
        {tags.map((tag, index) => (
          <div className="bg-blue-100 inline-flex items-center text-sm rounded mt-2 mr-1">
            <span
              key={index}
              className=" leading-relaxed flex flex-row justify-between items-center pl-2 truncate max-w-xs"
              x-text="tag"
            >
              <span className="pr-2">{tag}</span>
              <button
                onClick={() => handleTagRemove(index)}
                className="w-6 h-8 rounded-r-lg inline-block align-middle text-gray-500 hover:text-gray-600 bg-blue-200 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 fill-current mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                  />
                </svg>
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
