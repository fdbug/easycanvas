import { arrayRepeat } from './webgl-utils';

const blockIndices = new Uint16Array([
    0, 1, 2,   0, 2, 3,    // front  
    4, 5, 6,   4, 6, 7,    // right  
    8, 9,10,   8,10,11,    // up  
    12,13,14,  12,14,15,   // left  
    16,17,18,  16,18,19,   // down  
    20,21,22,  20,22,23,   // back  
]);

const blockTextures = new Float32Array(arrayRepeat([
    1, 0,
    0, 0,
    0, 1,
    1, 1,
], 6));

const TRIANGLE_FAN = 6;

const regularPolyhedron = {
    icosahedron: {
        vertices: [
            0,0,-1.902, 0,0,1.902, -1.701,0,-0.8507, 1.701,0,0.8507, 1.376,-1.000,-0.8507, 1.376,1.000,-0.8507, -1.376,-1.000,0.8507, -1.376,1.000,0.8507, -0.5257,-1.618,-0.8507, -0.5257,1.618,-0.8507, 0.5257,-1.618,0.8507, 0.5257,1.618,0.8507
        ],
        indices: [
            [1,11,7],[1,7,6],[1,6,10],[1,10,3],[1,3,11],[4,8,0],[5,4,0],[9,5,0],[2,9,0],[8,2,0],[11,9,7],[7,2,6],[6,8,10],[10,4,3],[3,5,11],[4,10,8],[5,3,4],[9,11,5],[2,7,9],[8,6,2]
        ],
    },
    tetrahedron: {
        vertices: [
            0,0,1.225, -0.5774,-1.000,-0.4082, -0.5774,1.000,-0.4082, 1.155,0,-0.4082
        ],
        indices: [
            [1,2,3],[2,1,0],[3,0,1],[0,3,2]
        ],
    },
    octahedron: {"vertices":[1,1,0,0,1,0,0.9510565162951535,1,0.3090169943749474,0.9510565162951535,1,0.3090169943749474,0,1,0,0.8090169943749475,1,0.5877852522924731,0.8090169943749475,1,0.5877852522924731,0,1,0,0.5877852522924731,1,0.8090169943749475,0.5877852522924731,1,0.8090169943749475,0,1,0,0.30901699437494745,1,0.9510565162951535,0.30901699437494745,1,0.9510565162951535,0,1,0,6.123233995736766e-17,1,1,6.123233995736766e-17,1,1,0,1,0,-0.30901699437494734,1,0.9510565162951536,-0.30901699437494734,1,0.9510565162951536,0,1,0,-0.587785252292473,1,0.8090169943749475,-0.587785252292473,1,0.8090169943749475,0,1,0,-0.8090169943749473,1,0.5877852522924732,-0.8090169943749473,1,0.5877852522924732,0,1,0,-0.9510565162951535,1,0.3090169943749475,-0.9510565162951535,1,0.3090169943749475,0,1,0,-1,1,1.2246467991473532e-16,-1,1,1.2246467991473532e-16,0,1,0,-0.9510565162951536,1,-0.3090169943749473,-0.9510565162951536,1,-0.3090169943749473,0,1,0,-0.8090169943749475,1,-0.587785252292473,-0.8090169943749475,1,-0.587785252292473,0,1,0,-0.5877852522924732,1,-0.8090169943749473,-0.5877852522924732,1,-0.8090169943749473,0,1,0,-0.30901699437494756,1,-0.9510565162951535,-0.30901699437494756,1,-0.9510565162951535,0,1,0,-1.8369701987210297e-16,1,-1,-1.8369701987210297e-16,1,-1,0,1,0,0.30901699437494723,1,-0.9510565162951536,0.30901699437494723,1,-0.9510565162951536,0,1,0,0.5877852522924729,1,-0.8090169943749476,0.5877852522924729,1,-0.8090169943749476,0,1,0,0.8090169943749473,1,-0.5877852522924734,0.8090169943749473,1,-0.5877852522924734,0,1,0,0.9510565162951535,1,-0.3090169943749476,0.9510565162951535,1,-0.3090169943749476,0,1,0,1,1,-2.4492935982947064e-16,0.9510565162951535,-1,0.3090169943749474,0,-1,0,1,-1,0,0.8090169943749475,-1,0.5877852522924731,0,-1,0,0.9510565162951535,-1,0.3090169943749474,0.5877852522924731,-1,0.8090169943749475,0,-1,0,0.8090169943749475,-1,0.5877852522924731,0.30901699437494745,-1,0.9510565162951535,0,-1,0,0.5877852522924731,-1,0.8090169943749475,6.123233995736766e-17,-1,1,0,-1,0,0.30901699437494745,-1,0.9510565162951535,-0.30901699437494734,-1,0.9510565162951536,0,-1,0,6.123233995736766e-17,-1,1,-0.587785252292473,-1,0.8090169943749475,0,-1,0,-0.30901699437494734,-1,0.9510565162951536,-0.8090169943749473,-1,0.5877852522924732,0,-1,0,-0.587785252292473,-1,0.8090169943749475,-0.9510565162951535,-1,0.3090169943749475,0,-1,0,-0.8090169943749473,-1,0.5877852522924732,-1,-1,1.2246467991473532e-16,0,-1,0,-0.9510565162951535,-1,0.3090169943749475,-0.9510565162951536,-1,-0.3090169943749473,0,-1,0,-1,-1,1.2246467991473532e-16,-0.8090169943749475,-1,-0.587785252292473,0,-1,0,-0.9510565162951536,-1,-0.3090169943749473,-0.5877852522924732,-1,-0.8090169943749473,0,-1,0,-0.8090169943749475,-1,-0.587785252292473,-0.30901699437494756,-1,-0.9510565162951535,0,-1,0,-0.5877852522924732,-1,-0.8090169943749473,-1.8369701987210297e-16,-1,-1,0,-1,0,-0.30901699437494756,-1,-0.9510565162951535,0.30901699437494723,-1,-0.9510565162951536,0,-1,0,-1.8369701987210297e-16,-1,-1,0.5877852522924729,-1,-0.8090169943749476,0,-1,0,0.30901699437494723,-1,-0.9510565162951536,0.8090169943749473,-1,-0.5877852522924734,0,-1,0,0.5877852522924729,-1,-0.8090169943749476,0.9510565162951535,-1,-0.3090169943749476,0,-1,0,0.8090169943749473,-1,-0.5877852522924734,1,-1,-2.4492935982947064e-16,0,-1,0,0.9510565162951535,-1,-0.3090169943749476,1,1,0,0.9510565162951535,1,0.3090169943749474,0.9510565162951535,-1,0.3090169943749474,1,1,0,0.9510565162951535,-1,0.3090169943749474,1,-1,0,0.9510565162951535,1,0.3090169943749474,0.8090169943749475,1,0.5877852522924731,0.8090169943749475,-1,0.5877852522924731,0.9510565162951535,1,0.3090169943749474,0.8090169943749475,-1,0.5877852522924731,0.9510565162951535,-1,0.3090169943749474,0.8090169943749475,1,0.5877852522924731,0.5877852522924731,1,0.8090169943749475,0.5877852522924731,-1,0.8090169943749475,0.8090169943749475,1,0.5877852522924731,0.5877852522924731,-1,0.8090169943749475,0.8090169943749475,-1,0.5877852522924731,0.5877852522924731,1,0.8090169943749475,0.30901699437494745,1,0.9510565162951535,0.30901699437494745,-1,0.9510565162951535,0.5877852522924731,1,0.8090169943749475,0.30901699437494745,-1,0.9510565162951535,0.5877852522924731,-1,0.8090169943749475,0.30901699437494745,1,0.9510565162951535,6.123233995736766e-17,1,1,6.123233995736766e-17,-1,1,0.30901699437494745,1,0.9510565162951535,6.123233995736766e-17,-1,1,0.30901699437494745,-1,0.9510565162951535,6.123233995736766e-17,1,1,-0.30901699437494734,1,0.9510565162951536,-0.30901699437494734,-1,0.9510565162951536,6.123233995736766e-17,1,1,-0.30901699437494734,-1,0.9510565162951536,6.123233995736766e-17,-1,1,-0.30901699437494734,1,0.9510565162951536,-0.587785252292473,1,0.8090169943749475,-0.587785252292473,-1,0.8090169943749475,-0.30901699437494734,1,0.9510565162951536,-0.587785252292473,-1,0.8090169943749475,-0.30901699437494734,-1,0.9510565162951536,-0.587785252292473,1,0.8090169943749475,-0.8090169943749473,1,0.5877852522924732,-0.8090169943749473,-1,0.5877852522924732,-0.587785252292473,1,0.8090169943749475,-0.8090169943749473,-1,0.5877852522924732,-0.587785252292473,-1,0.8090169943749475,-0.8090169943749473,1,0.5877852522924732,-0.9510565162951535,1,0.3090169943749475,-0.9510565162951535,-1,0.3090169943749475,-0.8090169943749473,1,0.5877852522924732,-0.9510565162951535,-1,0.3090169943749475,-0.8090169943749473,-1,0.5877852522924732,-0.9510565162951535,1,0.3090169943749475,-1,1,1.2246467991473532e-16,-1,-1,1.2246467991473532e-16,-0.9510565162951535,1,0.3090169943749475,-1,-1,1.2246467991473532e-16,-0.9510565162951535,-1,0.3090169943749475,-1,1,1.2246467991473532e-16,-0.9510565162951536,1,-0.3090169943749473,-0.9510565162951536,-1,-0.3090169943749473,-1,1,1.2246467991473532e-16,-0.9510565162951536,-1,-0.3090169943749473,-1,-1,1.2246467991473532e-16,-0.9510565162951536,1,-0.3090169943749473,-0.8090169943749475,1,-0.587785252292473,-0.8090169943749475,-1,-0.587785252292473,-0.9510565162951536,1,-0.3090169943749473,-0.8090169943749475,-1,-0.587785252292473,-0.9510565162951536,-1,-0.3090169943749473,-0.8090169943749475,1,-0.587785252292473,-0.5877852522924732,1,-0.8090169943749473,-0.5877852522924732,-1,-0.8090169943749473,-0.8090169943749475,1,-0.587785252292473,-0.5877852522924732,-1,-0.8090169943749473,-0.8090169943749475,-1,-0.587785252292473,-0.5877852522924732,1,-0.8090169943749473,-0.30901699437494756,1,-0.9510565162951535,-0.30901699437494756,-1,-0.9510565162951535,-0.5877852522924732,1,-0.8090169943749473,-0.30901699437494756,-1,-0.9510565162951535,-0.5877852522924732,-1,-0.8090169943749473,-0.30901699437494756,1,-0.9510565162951535,-1.8369701987210297e-16,1,-1,-1.8369701987210297e-16,-1,-1,-0.30901699437494756,1,-0.9510565162951535,-1.8369701987210297e-16,-1,-1,-0.30901699437494756,-1,-0.9510565162951535,-1.8369701987210297e-16,1,-1,0.30901699437494723,1,-0.9510565162951536,0.30901699437494723,-1,-0.9510565162951536,-1.8369701987210297e-16,1,-1,0.30901699437494723,-1,-0.9510565162951536,-1.8369701987210297e-16,-1,-1,0.30901699437494723,1,-0.9510565162951536,0.5877852522924729,1,-0.8090169943749476,0.5877852522924729,-1,-0.8090169943749476,0.30901699437494723,1,-0.9510565162951536,0.5877852522924729,-1,-0.8090169943749476,0.30901699437494723,-1,-0.9510565162951536,0.5877852522924729,1,-0.8090169943749476,0.8090169943749473,1,-0.5877852522924734,0.8090169943749473,-1,-0.5877852522924734,0.5877852522924729,1,-0.8090169943749476,0.8090169943749473,-1,-0.5877852522924734,0.5877852522924729,-1,-0.8090169943749476,0.8090169943749473,1,-0.5877852522924734,0.9510565162951535,1,-0.3090169943749476,0.9510565162951535,-1,-0.3090169943749476,0.8090169943749473,1,-0.5877852522924734,0.9510565162951535,-1,-0.3090169943749476,0.8090169943749473,-1,-0.5877852522924734,0.9510565162951535,1,-0.3090169943749476,1,1,-2.4492935982947064e-16,1,-1,-2.4492935982947064e-16,0.9510565162951535,1,-0.3090169943749476,1,-1,-2.4492935982947064e-16,0.9510565162951535,-1,-0.3090169943749476],"indices":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239],"normals":[0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997907,0,0,3.2360679774997907,0,0,3.2360679774997907,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997907,0,0,3.2360679774997907,0,0,3.2360679774997907,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.2360679774997885,0,0,3.2360679774997885,0,0,3.2360679774997885,0,0,3.2360679774997907,0,0,3.2360679774997907,0,0,3.2360679774997907,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997894,0,0,3.2360679774997885,0,0,3.2360679774997885,0,0,3.2360679774997885,0,0,3.23606797749979,0,0,3.23606797749979,0,0,3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.2360679774997907,0,0,-3.2360679774997907,0,0,-3.2360679774997907,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997907,0,0,-3.2360679774997907,0,0,-3.2360679774997907,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997894,0,0,-3.2360679774997885,0,0,-3.2360679774997885,0,0,-3.2360679774997885,0,0,-3.23606797749979,0,0,-3.23606797749979,0,0,-3.23606797749979,0,1.578437878668761,0,0.2500000000000002,1.578437878668761,0,0.2500000000000002,1.578437878668761,0,0.2500000000000002,1.578437878668761,0,0.2500000000000002,1.578437878668761,0,0.2500000000000002,1.578437878668761,0,0.2500000000000002,1.4239293814812872,0,0.7255282581475765,1.4239293814812872,0,0.7255282581475765,1.4239293814812872,0,0.7255282581475765,1.4239293814812872,0,0.7255282581475765,1.4239293814812872,0,0.7255282581475765,1.4239293814812872,0,0.7255282581475765,1.1300367553350505,0,1.1300367553350505,1.1300367553350505,0,1.1300367553350505,1.1300367553350505,0,1.1300367553350505,1.1300367553350505,0,1.1300367553350505,1.1300367553350505,0,1.1300367553350505,1.1300367553350505,0,1.1300367553350505,0.7255282581475766,0,1.4239293814812874,0.7255282581475766,0,1.4239293814812874,0.7255282581475766,0,1.4239293814812874,0.7255282581475766,0,1.4239293814812874,0.7255282581475766,0,1.4239293814812874,0.7255282581475766,0,1.4239293814812874,0.2500000000000002,0,1.578437878668761,0.2500000000000002,0,1.578437878668761,0.2500000000000002,0,1.578437878668761,0.2500000000000002,0,1.578437878668761,0.2500000000000002,0,1.578437878668761,0.2500000000000002,0,1.578437878668761,-0.2499999999999997,0,1.578437878668761,-0.2499999999999997,0,1.578437878668761,-0.2499999999999997,0,1.578437878668761,-0.2499999999999997,0,1.578437878668761,-0.2499999999999997,0,1.578437878668761,-0.2499999999999997,0,1.578437878668761,-0.725528258147577,0,1.423929381481287,-0.725528258147577,0,1.423929381481287,-0.725528258147577,0,1.423929381481287,-0.725528258147577,0,1.423929381481287,-0.725528258147577,0,1.423929381481287,-0.725528258147577,0,1.423929381481287,-1.1300367553350503,0,1.130036755335051,-1.1300367553350503,0,1.130036755335051,-1.1300367553350503,0,1.130036755335051,-1.1300367553350503,0,1.130036755335051,-1.1300367553350503,0,1.130036755335051,-1.1300367553350503,0,1.130036755335051,-1.4239293814812868,0,0.7255282581475768,-1.4239293814812868,0,0.7255282581475768,-1.4239293814812868,0,0.7255282581475768,-1.4239293814812868,0,0.7255282581475768,-1.4239293814812868,0,0.7255282581475768,-1.4239293814812868,0,0.7255282581475768,-1.578437878668761,0,0.2500000000000002,-1.578437878668761,0,0.2500000000000002,-1.578437878668761,0,0.2500000000000002,-1.578437878668761,0,0.2500000000000002,-1.578437878668761,0,0.2500000000000002,-1.578437878668761,0,0.2500000000000002,-1.578437878668761,0,-0.2499999999999997,-1.578437878668761,0,-0.2499999999999997,-1.578437878668761,0,-0.2499999999999997,-1.578437878668761,0,-0.2499999999999997,-1.578437878668761,0,-0.2499999999999997,-1.578437878668761,0,-0.2499999999999997,-1.4239293814812868,0,-0.7255282581475768,-1.4239293814812868,0,-0.7255282581475768,-1.4239293814812868,0,-0.7255282581475768,-1.4239293814812868,0,-0.7255282581475768,-1.4239293814812868,0,-0.7255282581475768,-1.4239293814812868,0,-0.7255282581475768,-1.130036755335051,0,-1.1300367553350503,-1.130036755335051,0,-1.1300367553350503,-1.130036755335051,0,-1.1300367553350503,-1.130036755335051,0,-1.1300367553350503,-1.130036755335051,0,-1.1300367553350503,-1.130036755335051,0,-1.1300367553350503,-0.725528258147577,0,-1.423929381481287,-0.725528258147577,0,-1.423929381481287,-0.725528258147577,0,-1.423929381481287,-0.725528258147577,0,-1.423929381481287,-0.725528258147577,0,-1.423929381481287,-0.725528258147577,0,-1.423929381481287,-0.2500000000000002,0,-1.578437878668761,-0.2500000000000002,0,-1.578437878668761,-0.2500000000000002,0,-1.578437878668761,-0.2500000000000002,0,-1.578437878668761,-0.2500000000000002,0,-1.578437878668761,-0.2500000000000002,0,-1.578437878668761,0.2499999999999997,0,-1.578437878668761,0.2499999999999997,0,-1.578437878668761,0.2499999999999997,0,-1.578437878668761,0.2499999999999997,0,-1.578437878668761,0.2499999999999997,0,-1.578437878668761,0.2499999999999997,0,-1.578437878668761,0.7255282581475766,0,-1.4239293814812874,0.7255282581475766,0,-1.4239293814812874,0.7255282581475766,0,-1.4239293814812874,0.7255282581475766,0,-1.4239293814812874,0.7255282581475766,0,-1.4239293814812874,0.7255282581475766,0,-1.4239293814812874,1.1300367553350499,0,-1.130036755335051,1.1300367553350499,0,-1.130036755335051,1.1300367553350499,0,-1.130036755335051,1.1300367553350499,0,-1.130036755335051,1.1300367553350499,0,-1.130036755335051,1.1300367553350499,0,-1.130036755335051,1.4239293814812868,0,-0.7255282581475768,1.4239293814812868,0,-0.7255282581475768,1.4239293814812868,0,-0.7255282581475768,1.4239293814812868,0,-0.7255282581475768,1.4239293814812868,0,-0.7255282581475768,1.4239293814812868,0,-0.7255282581475768,1.578437878668761,0,-0.2500000000000002,1.578437878668761,0,-0.2500000000000002,1.578437878668761,0,-0.2500000000000002,1.578437878668761,0,-0.2500000000000002,1.578437878668761,0,-0.2500000000000002,1.578437878668761,0,-0.2500000000000002]},
    cube: {
        vertices: [
            -1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1
        ],
        indices: [
            [7,3,1,5],[7,5,4,6],[7,6,2,3],[3,2,0,1],[0,2,6,4],[1,0,4,5]
        ],
    },
    
};

var createShapeWithCachedArray = (() => {
    const cachePool = {};

    return (shape, args, colors = []) => {
        var key = shape + args.join(',') + colors.join(',');

        var result = {};

        if (shape === 'quadrilateral') {
            // var vertices = cachePool[key + 'v'] || new Float32Array([
            //     0, 0, 0,
            //     200, 0, 0,
            //     0, 100, 0,

            //     0, 100, 0,
            //     200, 0, 0,
            //     400, 100, 0,
            // ]);

            // var longSide = cachePool[key + 'l'] || Math.max(Math.max.apply(this, vertices), -Math.min.apply(this, vertices));

            // result.vertices = cachePool[key + 'v'] = vertices;
            // result.textures = new Float32Array(arrayRepeat([
            //     0, 0,
            //     1, 0,
            //     0, 1,
            //     0, 1,
            //     1, 0,
            //     1, 1,
            // ], 1));
            // result.longSide = cachePool[key + 'l'] = longSide;
        } else if (shape === 'block') {
            var a = args[0] / 2;
            var b = args[1] / 2;
            var c = args[2] / 2;

            var vertices = cachePool[key + 'v'] || new Float32Array([
                a, b, c,
                -a, b, c,
                -a, -b, c,
                a, -b, c,
                a, b, c,
                a, -b, c,
                a, -b, -c,
                a, b, -c,
                a, b, c,
                a, b, -c,
                -a, b, -c,
                -a, b, c,
                -a, b, c,
                -a, b, -c,
                -a, -b, -c,
                -a, -b, c,
                -a, -b, -c,
                a, -b, -c,
                a, -b, c,
                -a, -b, c,
                a, -b, -c,
                -a, -b, -c,
                -a, b, -c,
                a, b, -c
            ]);

            var longSide = cachePool[key + 'l'] || Math.max(Math.max.apply(this, vertices), -Math.min.apply(this, vertices));

            result.vertices = cachePool[key + 'v'] = vertices;
            result.indices = blockIndices;
            result.textures = blockTextures;
            result.longSide = cachePool[key + 'l'] = longSide;
        } else if (shape === 'ball') {
            // ball
            var vertexPositionData = cachePool[key + 'v'] || [];
            var indexData = cachePool[key + 'i'] || [];
            var textureCoordData = cachePool[key + 't'] || [];

            if (!vertexPositionData.length) {
                var normalData = [];
                var radius = args[0];
                var latitudeBands = args[1], longitudeBands = args[2];

                for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
                    var theta = latNumber * Math.PI / latitudeBands;
                    var sinTheta = Math.sin(theta);
                    var cosTheta = Math.cos(theta);

                    for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
                        var phi = longNumber * 2 * Math.PI / longitudeBands;
                        var sinPhi = Math.sin(phi);
                        var cosPhi = Math.cos(phi);

                        var x = cosPhi * sinTheta;
                        var y = cosTheta;
                        var z = sinPhi * sinTheta;
                        var u = 1 - (longNumber / longitudeBands);
                        var v = 1 - (latNumber / latitudeBands);

                        normalData.push(x);
                        normalData.push(y);
                        normalData.push(z);
                        textureCoordData.push(u);
                        textureCoordData.push(v);
                        vertexPositionData.push(radius * x);
                        vertexPositionData.push(radius * y);
                        vertexPositionData.push(radius * z);
                    }
                }

                for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
                    for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
                        var first = (latNumber * (longitudeBands + 1)) + longNumber;
                        var second = first + longitudeBands + 1;
                        indexData.push(first);
                        indexData.push(second);
                        indexData.push(first + 1);

                        indexData.push(second);
                        indexData.push(second + 1);
                        indexData.push(first + 1);
                    }
                }

                cachePool[key + 'v'] = new Float32Array(vertexPositionData);
                cachePool[key + 'i'] = new Uint16Array(indexData);
                cachePool[key + 't'] = new Float32Array(textureCoordData);
                cachePool[key + 'l'] = Math.max(Math.max.apply(this, vertices), -Math.min.apply(this, vertexPositionData));
            }

            result.vertices = cachePool[key + 'v'];
            result.indices = cachePool[key + 'i'];
            result.textures = cachePool[key + 't'];
            result.longSide = cachePool[key + 'l'];
        // } else if (shape === 'icosahedron') {
        } else {
            var vertices = cachePool[key + 'v'] || new Float32Array(regularPolyhedron[shape].vertices.map((v) => {
                return v * args[0] / 2;
            }));

            var longSide = cachePool[key + 'l'] || Math.max(Math.max.apply(this, vertices), -Math.min.apply(this, vertices));

            result.vertices = cachePool[key + 'v'] = vertices;
            result.indices = new Uint16Array(regularPolyhedron[shape].indices.join(',').split(','));

            result.textures = cachePool[key + 't'];
            if (!result.textures) {
                result.textures = [];
                for (var i = 0; i < result.indices.length; i++) {
                    result.textures.push(Math.random().toFixed(2));
                }
                result.textures = cachePool[key + 't'] = new Float32Array(result.textures);
            }

            result.longSide = cachePool[key + 'l'] = longSide;
        }

        if (colors.length) {
            // 优先走缓存
            result.colors = cachePool[key + 'c'];

            if (!result.colors) {
                // var colorRepeatTimes = result.vertices.length / colors.length;
                var colorRepeatTimes = (result.indices || result.vertices).length * (result.indices ? 4 : 1) / colors.length;
                result.colors = new Uint8Array(arrayRepeat(colors, Math.ceil(colorRepeatTimes)));

                cachePool[key + 'c'] = result.colors;
            }
        }

        return result;
    };
})();

const wrapper = function (structure, opt) {
    for (let key in opt) {
        if (!structure[key]) {
            structure[key] = opt[key]
        }
    }

    return structure;
};

const appendEventFlag = (function () {
    let current = 0;


    return function (shape) {
        if (!current) {
            current++;
        }

        let colorRepeatTimes = (shape.indices || shape.vertices).length * (shape.indices ? 4 : 1) / 4;
        shape.$eventFlag = new Uint8Array(arrayRepeat([
            current % 256,
            Math.floor(current / 256) % 256,
            Math.floor(current / 65536) % 256,
        ], Math.ceil(colorRepeatTimes)));

        current++;

        return shape;
    };
})();

const err = function (msg) {
    console.error('[Easycanvas-webgl] ' + msg);
};

const webglShapes = {
    block: function (opt) {
        var structure = createShapeWithCachedArray('block', [opt.a, opt.b, opt.c], opt.colors);
        return appendEventFlag(wrapper(structure, opt));
    },

    quadrilateral: function (opt) {
        var structure = createShapeWithCachedArray('quadrilateral', [opt.a, opt.b, opt.c], opt.colors);
        return appendEventFlag(wrapper(structure, opt));
    },

    ball: function (opt) {
        var structure = createShapeWithCachedArray('ball', [opt.r, opt.b || opt.lat || 20, opt.b || opt.lng || 20], opt.colors);
        return appendEventFlag(wrapper(structure, opt));
    },

    custom: function (opt) {
        // if (process.env.NODE_ENV !== 'production') {
        //     if (!opt.vertices || !opt.vertices.length) {
        //         err('No vertices provided on custom shape.');
        //         // console.log(opt);
        //         // return;
        //     }
        // }

        if (!opt.vertices.$cache) {
            // 确保复用Float32Array类型的vertices
            // 一个模型含有多个children时，使用相同的vertices的Buffer，提升效率
            opt.vertices.$cache = new Float32Array(opt.vertices);
        }

        if (opt.normals && opt.normals.length) {
            if (!opt.normals.$cache) {
                opt.normals.$cache = new Float32Array(opt.normals);
            }
        }

        if (opt.indices && opt.indices.length) {
            if (!opt.indices.$cache) {
                opt.indices.$cache = new Uint16Array(opt.indices);
            }
        }

        if (opt.textures && opt.textures.length) {
            if (!opt.textures.$cache) {
                var repeatTimes = opt.vertices.length / opt.textures.length / 1.5;
                opt.textures.$cache = new Float32Array(arrayRepeat(opt.textures, repeatTimes));
            }
        }

        if (opt.colors && opt.colors.length) {
            if (!opt.colors.$cache) {
                // 没有透明度时，colors和vertices都是长度为3的数组，一一对应，总长度相同
                var repeatTimes = opt.vertices.length / opt.colors.length;

                if (opt.hasAlpha) {
                    repeatTimes = repeatTimes / 3 * 4;
                }

                opt.colors.$cache = new Uint8Array(arrayRepeat(opt.colors, repeatTimes));
            }
        }

        var res = Object.assign(opt, {
            vertices: opt.vertices.$cache,
            normals: opt.normals ? opt.normals.$cache : undefined,
            indices: opt.indices ? opt.indices.$cache : undefined,
            textures: opt.textures ? opt.textures.$cache : undefined,
            colors: opt.colors ? opt.colors.$cache : undefined,
        });

        return appendEventFlag(res);
    },

    // icosahedron: function (opt) {
    //     var structure = createShapeWithCachedArray('icosahedron', [opt.r], opt.colors);
    //     return wrapper(structure, opt);
    // },
};

for (let shape in regularPolyhedron) {
    webglShapes[shape] = function (opt) {
        var structure = createShapeWithCachedArray(shape, [opt.r], opt.colors);
        structure.type = TRIANGLE_FAN;
        return appendEventFlag(wrapper(structure, opt));
    };
}

export default webglShapes;
