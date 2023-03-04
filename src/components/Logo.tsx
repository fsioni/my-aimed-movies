import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      priority
      src="/logo.png"
      alt="Logo My Aimed Movies"
      width={500}
      height={268}
      className="mr-3 h-16 w-auto dark:bg-gray-400 dark:rounded"
    />
  );
}
