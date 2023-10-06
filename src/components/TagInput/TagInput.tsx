import { useState } from "react";

interface TagInputProps {
  addTagToFormData: (tag: string) => void;
}
const TagInput: React.FC<TagInputProps> = ({ addTagToFormData }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      const newTag = tagInput.trim();
      addTagToFormData(newTag);
      setTags([...tags, newTag]);
      setTagInput("");
      console.log(TagInput);
    }
  };

  const handleRemoveTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  return (
    <div>
      <label htmlFor="tags" className="block text-sm font-light text-gray-400">
        ajouter des skills
      </label>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded"
          >
            {tag}
            <button
              type="button"
              className="ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900"
              onClick={() => handleRemoveTag(tag)}
            >
              X
            </button>
          </span>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          id="tags"
          name="tags"
          value={tagInput}
          onChange={handleTagInput}
          className="border rounded-md px-3 py-2 w-full"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="bg-indigo-500 text-white px-2 py-1 m-1 rounded-md"
        >
          ajouter
        </button>
      </div>
    </div>
  );
};

export default TagInput;
