const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // Create a green to white gradient
    vec3 greenColor = vec3(0.733, 0.949, 0.251);    // Pure green
    vec3 whiteColor = vec3(0.0, 0.0, 0.0);    // White
    
    // Mix the colors based on displacement and UV coordinates
    vec3 color = mix(greenColor, whiteColor, (vUv.y + distort) * 0.2);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
