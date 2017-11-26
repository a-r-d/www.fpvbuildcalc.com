import React from "react";
import Paper from "material-ui/Paper";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";

import "./BuildGuide.css";

const partList = () => {
  return (
    <List>
      <Subheader>Quadcopter Components</Subheader>
      <ListItem
        leftAvatar={<Avatar src="/images/martian-ii-220.jpg" />}
        primaryText="Frame"
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src="/images/mr-steele-silk.jpg" />}
        primaryText="Brushless Motors"
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src="/images/makerfire-30a.jpg" />}
        primaryText="Electronic Speed Controllers"
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src="/images/flyduino-kiss.jpg" />}
        primaryText="Flight Controller"
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src="/images/matek-sys.jpg" />}
        primaryText="Power Distribution Board (PDB)"
      />
      <Divider inset={true} />
      <ListItem
        leftAvatar={<Avatar src="/images/frsky-x4rsb.jpg" />}
        primaryText="Radio Receiver"
      />
      <Divider inset={true} />

      <ListItem
        leftAvatar={<Avatar src="/images/runcam-rotor-riot.jpg" />}
        primaryText="FPV Camera"
      />
      <Divider inset={true} />

      <ListItem
        leftAvatar={<Avatar src="/images/eachine-vtx.jpg" />}
        primaryText="FPV Video Transmitter"
      />
      <Divider inset={true} />

      <ListItem
        leftAvatar={<Avatar src="/images/dal-cyclone.jpg" />}
        primaryText="Propellers"
      />

      <Subheader>Necessary Accessories</Subheader>

      <ListItem
        leftAvatar={<Avatar src="/images/frsky-taranis-qx7s-blue_1.jpg" />}
        primaryText="Radio Transmitter"
      />
      <Divider inset={true} />

      <ListItem
        leftAvatar={<Avatar src="/images/fat-shark-dominator-v3.jpg" />}
        primaryText="FPV Headset (Video receiver)"
      />
      <Divider inset={true} />

      <ListItem
        leftAvatar={<Avatar src="/images/1300-4s-front.jpg" />}
        primaryText="Batteries"
      />
      <Divider inset={true} />

      <ListItem
        leftAvatar={<Avatar src="/images/ev-peak-a1-100w-10amp-front_1.jpg" />}
        primaryText="Battery Charger"
      />
    </List>
  );
};

const BuildGuide = () => {
  return (
    <div className="BuildGuideContainer">
      <Paper>
        <h2>The FPV Quadcopter Build Guide</h2>

        <div className="BGRow">
          <div className="BGProductCards" style={{ flex: "1 1 auto" }}>
            <Card style={{ margin: "0.5rem" }}>
              {/* <CardHeader
                title="Getting Started With A Custom Build"
                avatar="/images/icons/bulb.png"
              /> */}
              <CardTitle
                title="Getting Started With A Custom Build"
                subtitle="Start reading here first"
              />
              <CardText>
                <p>
                  OK, so you want to your build your own quadcopter for racing
                  or FPV. There are many good resources for this but a lot of
                  them come in the form of YouTube videos. I hope this can serve
                  as an easily accessible piece of reference material that you
                  can come back to and quickly find what you need.
                </p>

                <p>
                  To the right is the list of all of things you will need to
                  build and fly a quadcopter, and below is a bit of detail about
                  each component. You are probably thinking this looks like a
                  lot of stuff, right? Well, you would be correct.{" "}
                  <strong>
                    Normally it takes about $1000 worth of gear to get into this
                    hobby in a meaningful way with good quality gear and enough
                    batteries for things to be fun.
                  </strong>{" "}
                  You can go a bit cheaper too but eventually you will want to
                  start upgrading things, so the argument can be made for just
                  buying the high quality gear from the outset.
                </p>
              </CardText>
            </Card>

            <div className="BGDescriptionRow">
              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Picking a Frame"
                  avatar="/images/martian-ii-220.jpg"
                />
                <CardText>
                  <p>
                    A frame should be big enough to hold all of the gear you
                    want to load on the quad. Think about if you will be using a
                    GoPro frequently and how large a battery you will be using.
                    Your frame will determine the size of the props you can use,
                    but most "mini-quad" frames in the 210mm to 250mm range will
                    accomodate 5 inch props.
                  </p>
                  <p>
                    For the 5" prop size frames they essentially break down into
                    two categories: those that are very lightweight and geared
                    towards racing, and those that are boxy and robust and
                    geared toward freestyle (along with variations in between).
                    If you are a beginner it could be argued that you should go
                    with a frame style similar to Alien / Martian that is boxy
                    and sturdy in the event of a hard crash.
                  </p>
                  <p>
                    Some frames like the{" "}
                    <a href="http://www.armattanquads.com/chameleon/">
                      Armattan Chameleon{" "}
                    </a>{" "}
                    offer a warranty, and excellent support from the
                    manufacturer. Also, be careful to consider if you are buying
                    an original frame design or a clone (clones are common on
                    Banggood).
                  </p>
                </CardText>
              </Card>

              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Choosing Motors"
                  avatar="/images/mr-steele-silk.jpg"
                />
                <CardText>
                  <p>
                    For a miniquad with 5" props, you are likely going to be
                    looking at brushless motors in the 2300KV to 2600KV range.
                    You want to pair the motors and the speed controllers,
                    because motors that are going to pull more energy are going
                    to require higher rated speed controllers.
                  </p>
                  <p>
                    Commonly you will see builds that use 2300KV motors and 20A
                    speed controllers, while higher KV motors such as 2600KV
                    motors will be paired with 30A speed controllers. KV
                    actually refers to R.P.M./Volt, so when you are using 4S
                    batteries it should be be something around 15-16 volts while
                    flying.
                  </p>
                </CardText>
              </Card>

              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Choosing Speed Contollers"
                  avatar="/images/makerfire-30a.jpg"
                />
                <CardText>
                  <p>
                    Again, as mentioned in the motors section, you want to pick
                    speed controllers that can handle the current that your
                    motors will be drawing. The other big consideration with
                    speed controllers is compatibility with your flight
                    controller and what protocols it supports.
                  </p>
                  <p>
                    Right now, you want to either go with BLHeli_S or KISS speed
                    controllers. Almost any BLHeli_S speed controller will be
                    compatible with a flight controller running Cleanflight or
                    Betaflight firmware.
                  </p>
                </CardText>
              </Card>
            </div>

            <div className="BGDescriptionRow">
              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Finding a Flight Controller"
                  avatar="/images/sp-f3-osd.jpg"
                />
                <CardText>
                  <p>
                    The flight controller is the brains of your quadcopter. It
                    takes the signals from the receiver and sends them to the
                    speed controllers. When you run your quacopter in angle mode
                    it uses the gyroscope to determine orientation in the air
                    and sends corrections to the speed controller to keep your
                    quad from flying beyond the angle limit. If the flight
                    controller has an OSD it will modify the video signal by
                    overalaying relevant information on top of it.
                  </p>
                  <p>
                    What are some good things to look for in a flight
                    controller? Currently you want to get a flight controller
                    running Cleanflight or Betaflight firmware, which you should
                    pair with BLHeli_S ESCs. Another good alternative is a KISS
                    flight controller, which you can pair with KISS ESCs. You
                    also want to make sure you have enough interfaces to hook up
                    to all of your components. This means the number of UARTS
                    (hardware serial ports that allow you to connect external
                    devices).
                  </p>
                  <p>
                    You should consider connector types of the speed controller
                    / flight controller interface. Will you want to solder up
                    the speed controllers directly to the flight controller, or
                    do you want header pins to be able to easily swap things
                    out?
                  </p>
                  <p>
                    Do you want a VBat monitor and or alarm on your flight
                    controller? Or maybe the PDB will handle that part.
                  </p>
                  <p>
                    Check out{" "}
                    <a href="https://oscarliang.com/best-flight-controller-quad-hex-copter/">
                      this excellent Oscar Liang guide
                    </a>.
                  </p>
                </CardText>
              </Card>

              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Power Distribution Boards (PDB)"
                  avatar="/images/matek-sys.jpg"
                />
                <CardText>
                  <p>
                    The Power Distribution Board (PDB) is the component that
                    connects to your LiPo battery and sends power to every other
                    component. It sends power to each of the speed controllers
                    directly (unregulated), and typically will have solder pads
                    for 5V and 12V regulated power. The 5V power leads will go
                    to the flight controller and the 12V power leads can be used
                    to power your camera and video transmitter.
                  </p>
                  <p>
                    There are some other things you may you want to wire up to
                    your PDB. If you LED lights you will want to figure out some
                    way to wire them up a regulated power source on your PDB.
                    Also, if you want VBat monitoring (which can be done via
                    flight controller, video camera, or receiver) you will want
                    to wire that up directly to the PDB as well.
                  </p>
                </CardText>
              </Card>

              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Radio Receiver and Transmitter"
                  avatar="/images/frsky-x4rsb.jpg"
                />
                <CardText>
                  <p>
                    The Receiver picks up signals from your transmitter and
                    relays them to your flight controllers. There are a few
                    different brands supporting a few different protocols. The
                    reciever is a cheap component, and what receiver you will
                    use will depend on what radio transmitter you own (which is
                    typically 10x the cost of a receiver module).
                  </p>
                  <p>
                    According to many FrSky is currently the leader if
                    manufacturing the most high quality transmitters and
                    receivers for the miniquad market. FrSky Taranis seems to be
                    the most popular radio that professional freestylers and
                    racers pick by a long shot. Many people also believe that
                    the protocols that FrSky uses are much more robust than
                    FlySky or Spektrum.
                  </p>
                  <p>
                    The most inexpensive brand is FlySky, which has cheap
                    transmitters and receivers. There are FlySky receivers and
                    transmitters that support both PPM and the faster serial
                    protocol iBus.
                  </p>
                  <p>
                    Spektrum is another high quality radio and the DX8 is a
                    popular choice, however it is less popular than FrSky
                    Taranis. The popular Rotor Riot pilot Le Drib uses a
                    Spektrum DX8.
                  </p>
                </CardText>
              </Card>
            </div>

            <div className="BGDescriptionRow">
              <Card style={{ flex: "1 1.5 auto" }}>
                <CardHeader
                  title="FPV Camera"
                  avatar="/images/runcam-rotor-riot.jpg"
                />
                <CardText>
                  <p>
                    When picking an FPV camera you want to look at a few things. First, you want to get a 
                    CCD camera (not CMOS) because this is generally a higher quality sensor type. The TVL rating is another 
                    thing to look at: 600TVL means 600 TV Lines of resolution. Higher is better. Next you want to 
                    consider light sensitivity, having a camera that works great in low loght is crucial for 
                    flying in evenings.  Finally consider field of view angle. Do you like to fly with a wide angle or 
                    a narrow angle? 
                  </p>
                  <p>
                    Right now a great general purpose FPV camera is the Runcam Swift 2. It has excellent image 
                    quality, great low light support (I have flown with the Swift 2 under and overpass at night and been 
                    able to see clearly), and even has an OSD with vBat monitoring support. There is even a Rotor Riot version 
                    of the Runcam Swift 2. The 2.3 mm lens has a nice 150° FOV. 
                  </p>

                </CardText>
              </Card>

              <Card style={{ flex: "1 1.5 auto" }}>
                <CardHeader
                  title="Video Transmitter (VTX)"
                  avatar="/images/eachine-vtx.jpg"
                />
                <CardText>
                  <p>
                    The video transmitter takes the signal from your video
                    camera and transmits it back to your headset. Video
                    transmitters have different signal strengths, and the 3 most
                    commonly seen are 25, 200, and 600 mw. 25 and 200 mw are
                    meant for using in race situations where many others will be
                    transmitting. 600mw is meant for outdoor use, the strong
                    signal can cause interference with other users or in small
                    confined areas.
                  </p>
                  <p>
                    You probably want to get a VTX that allows you to easily
                    change the channel and or the signal strength, there many
                    variants of these that include a button and LCD display for
                    this purpose.
                  </p>
                  <p>
                    If you want to fly long range you can also pick up a VTX
                    that will transmit with a strenth of 1200mw
                  </p>
                </CardText>
              </Card>

              <Card style={{ flex: "1 1 auto" }}>
                <CardHeader
                  title="Propellers"
                  avatar="/images/dal-cyclone.jpg"
                />
                <CardText>
                  <p>
                      Propellers come in many variations too lengthy to describe here in detail.  
                      But among 5" props for freestyle and racing there are few ways to describe them.
                  </p>
                  <p>
                      <strong>Number of blades.</strong> The more surface area you have on the propeller, 
                      the more thrust and current draw. So tri-blades are going to be less efficient but 
                      snappier feeling than bi-blades. 
                  </p>
                  <p>
                      <strong>Pitch Angle.</strong> Higher pitch angle generates more thrust, thus more current draw.
                      Also, a higher (or steeper) pitch angle will disturb the air a lot more. This can create more prop wash. 
                  </p>
                  <p>
                      <strong>Tip of the props.</strong> Pointy tips or bullnose? Bullnose does confer more surface area so 
                      it should give more thrust. I have also read that pointy tips direct air out in such a way to create less 
                      prop wash. I like to fly bullnose though because they are more durable. 
                  </p>
                  <p>
                     What are lot of people flying right now? <a href="http://amzn.to/2iFMuor">HQ V1S - tri blades.</a>. 
                     A lot of Rotor Riot people seem to fly HQ props. However, as a more inexperienced pilot 
                     I like to fly stiffer props that break less often. I usually go for&nbsp;
                     <a href="https://www.banggood.com/2-Pairs-DALPROP-5045-T5045-3-Blade-PC-Propeller-CW-CCW-For-QAV250-ZMR250-240-RC-Multirotors-p-1056195.html?p=H101138294533201701A">bullnose Dal Props, which are 
                     made from very stiff plastic</a>. 
                  </p>
                </CardText>
              </Card>
            </div>
          </div>

          <Card style={{ flex: "1 0 auto", minWidth: "10rem" }}>
            <CardHeader
              title="The General Parts list"
              avatar="/images/icons/bulb.png"
            />
            <CardText>{partList()}</CardText>
          </Card>
        </div>
      </Paper>
    </div>
  );
};

export default BuildGuide;
