     __    __    ______     ______    __  ___         __    ______   
    |  |  |  |  /  __  \   /  __  \  |  |/  /        |  |  /  __  \  
    |  |__|  | |  |  |  | |  |  |  | |  '  /         |  | |  |  |  | 
    |   __   | |  |  |  | |  |  |  | |    <          |  | |  |  |  | 
    |  |  |  | |  `--'  | |  `--'  | |  .  \    __   |  | |  `--'  | 
    |__|  |__|  \______/   \______/  |__|\__\  (__)  |__|  \______/  

    the node.js hook i/o platform

# v0.4.0

# Current Status :

Rebuilt entire project for the third time in two years.

- All hooks are now separated into node.js processes
- Interprocess Communication is facilitated through dnode
- Spawning and Daemonizing of processes is handled with Forever
- Message publishing has a one-one API with EventEmitter class 
- Message Publishing and Subscribing done through node's native EventEmitter API
- EventEmitter API is extended with namespaces using EventEmitter2
- Hooks can now have many upstreams and many downstreams
- Super simple API for insane functionality


## Try out a contrived demo 

We will create a "battle" ( an i/o hook with a downstream ) that can have several actors ( i/o hooks with upstreams ). These actors will then work together in the battle with hilarious results. This demo begins to showcase the power of i/o hook. More involved demos will be coming shortly. 

## Install hook.io

    git clone git://github.com/Marak/hook.io.git
    cd hook.io
    [sudo] npm install
    
## Start up the battle

    node hook/battle
    
*Starts up a hook process with a downstream server. Now the battle has started and is waiting for some actors.*


## Connect actors to the battle

    node hook/scout
    node hook/gunner
    node hook/ammo_guy

*Starts up three hook processes with upstream connections to the battle. Each actor is responible for a specific task in the battle.*

## Introduce an enemy to the battle!

    node hook/enemy
   
*Starts up an enemy hook process which causes a chain reaction of events from other actors causing the enemy to be shot to death.*


## Create a sound effects hook

    node hook/sfx
   
*Starts up a sound effects hook which listens for messages from all the actors and plays funny sounds effects!*



    
## Contributors ( through code and advice )

AvianFlu, Chapel, Substack, Dominic Tarr, Charlie Robbins, h1jinx
