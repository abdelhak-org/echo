import Image from 'next/image';
import cloudinary from  "../../../cloudinary.config" // Assuming you imported it

function MyComponent() {
  const imageUrl = cloudinary.url('your_image_public_id', {
    transformation: {
      width: 400,
      height: 300,
      crop: 'fill', // Or other transformations
    },
  });

  return (
    <Image
      src={imageUrl}
      alt="Your image description"
      width={400}
      height={300}
    />
  );
}

export default MyComponent;