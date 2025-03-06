import ReactPlayer from 'react-player';

function Streaming() {
  const url = '/CGERA.mp4'; // Ahora usa el archivo convertido

  return (
    <div
      className="bg-blue-100 col-span-3 col-start-2 flex justify-center items-center shadow-[1px_1px_11px0px#718096] rounded-2xl mx-2 max-h-[80vh]"
      data-aos="fade-up"
    >
      <ReactPlayer
        url={url}
        playing={false}
        volume={0.8}
        controls
        width="100%" // Ocupa todo el ancho disponible
        height="100%" // Ajusta la altura al 100% del contenedor
      />
    </div>
  );
}

export default Streaming;
