import Image from "next/image";

export function AboutUs() {
  return (
    <section>
      <div>
        <div>
          <h1>Um pouco sobre nós</h1>
        </div>
        <div className="flex">
          <div>
            <div className="flex">
              <div>
                <div>
                  <span></span>
                </div>
                <div>
                  <p>45K +</p>
                  <span>Happy Campers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <h3>Associação dos Guias de Turismo de Maricá</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus deserunt, unde, iste incidunt tempora sunt
                exercitationem nam voluptates vel suscipit obcaecati delectus
                laboriosam? Possimus laboriosam aspernatur, tempore quas velit
                reprehenderit. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Sint nihil vel distinctio at itaque sit veniam
                similique eos consequatur doloribus. Explicabo iure repudiandae
                neque necessitatibus sunt tenetur, dicta consectetur commodi?
              </p>
            </div>
            <div className="agm">
              <Image
                src="/imgs/backgrounds/marica-background.jpg"
                width={800}
                height={800}
                alt="agm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
