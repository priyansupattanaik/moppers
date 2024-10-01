import React from "react";

export default function Map() {
  return (
    <section className="w-full h-fit">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13333258.560947256!2d-17.572591835644577!3d35.32610111020825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sin!4v1727608091184!5m2!1sen!2sin"
        className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
