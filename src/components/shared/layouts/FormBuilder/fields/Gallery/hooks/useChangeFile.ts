import { ChangeEvent, useState } from "react";
import { GalleryFileShape } from "../type";

export function useChangeFile() {
  const [files, setFiles] = useState<Array<GalleryFileShape>>([]);

  const handleDelete = (fileIndex: number) => {
    setFiles((files) => {
      return files.filter((file, key) => key !== fileIndex);
    });
  };

  const handleDeleteAll = () => {
    setFiles([]);
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const changeFiles = e.currentTarget.files;
    if (!changeFiles) return;

    const newFiles = Array.from(changeFiles);

    const galleryFiles = newFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
      ref: file,
      status: "AWAITING",
    })) as Array<GalleryFileShape>;

    const updatedFiles = [...files, ...galleryFiles];
    setFiles(updatedFiles);
  };

  return {
    files,
    handleChangeFile,
    handleDelete,
    handleDeleteAll,
    setFiles,
  };
}
