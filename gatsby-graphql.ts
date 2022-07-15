export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteGraphqlTypegen = {
  typesOutputPath?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleTemplate?: Maybe<Scalars['String']>;
  defaultTitle?: Maybe<Scalars['String']>;
  defaultImage?: Maybe<Scalars['String']>;
  defaultDescription?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  url?: Maybe<Scalars['String']>;
  placeholderUrl?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  filesize?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  resizingBehavior?: InputMaybe<ImageResizingBehavior>;
  cropFocus?: InputMaybe<ContentfulImageCropFocus>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

/** Remote Interface */
export type RemoteFile = {
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['GatsbyImageData']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  layout?: InputMaybe<RemoteFileLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<RemoteFileFit>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type RemoteFileResize = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
};

export type RemoteFileFit =
  | 'COVER'
  | 'FILL'
  | 'OUTSIDE'
  | 'CONTAIN';

export type RemoteFileFormat =
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type RemoteFileCropFocus =
  | 'CENTER'
  | 'TOP'
  | 'RIGHT'
  | 'BOTTOM'
  | 'LEFT'
  | 'ENTROPY'
  | 'EDGES'
  | 'FACES';

export type RemoteFileLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type RemoteFilePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'TRACED_SVG'
  | 'NONE';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulArticle = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<ContentfulArticleBody>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  mainImage?: Maybe<ContentfulAsset>;
  category?: Maybe<ContentfulCategory>;
  metaDescription?: Maybe<ContentfulArticleMetaDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulArticleSys>;
  mustRead?: Maybe<Scalars['Boolean']>;
  frequently_asked_questions?: Maybe<Array<Maybe<ContentfulFrequentlyAskedQuestions>>>;
  /** Returns all children nodes filtered by type contentfulArticleMetaDescriptionTextNode */
  childrenContentfulArticleMetaDescriptionTextNode?: Maybe<Array<Maybe<ContentfulArticleMetaDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulArticleMetaDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulArticleMetaDescriptionTextNode?: Maybe<ContentfulArticleMetaDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulArticleCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulArticleUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulArticleBody = {
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulArticleContentfulAssetContentfulLeadMagnetUnion>>>;
};

export type ContentfulArticleContentfulAssetContentfulLeadMagnetUnion = ContentfulArticle | ContentfulAsset | ContentfulLeadMagnet;

export type ContentfulArticleSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulArticleSysContentType>;
};

export type ContentfulArticleSysContentType = {
  sys?: Maybe<ContentfulArticleSysContentTypeSys>;
};

export type ContentfulArticleSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulCategory = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  frequentlyAskedQuestions?: Maybe<Array<Maybe<ContentfulFrequentlyAskedQuestions>>>;
  article?: Maybe<Array<Maybe<ContentfulArticle>>>;
  pageDescription?: Maybe<ContentfulCategoryPageDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCategorySys>;
  definition?: Maybe<Array<Maybe<ContentfulDefinition>>>;
  keyTerms?: Maybe<Array<Maybe<ContentfulDefinition>>>;
  /** Returns all children nodes filtered by type contentfulCategoryPageDescriptionTextNode */
  childrenContentfulCategoryPageDescriptionTextNode?: Maybe<Array<Maybe<ContentfulCategoryPageDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulCategoryPageDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulCategoryPageDescriptionTextNode?: Maybe<ContentfulCategoryPageDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulCategoryCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulCategorySys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCategorySysContentType>;
};

export type ContentfulCategorySysContentType = {
  sys?: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulDefinition = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  mainText?: Maybe<ContentfulDefinitionMainText>;
  secondaryText?: Maybe<ContentfulDefinitionSecondaryText>;
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  category?: Maybe<ContentfulCategory>;
  metaDescription?: Maybe<ContentfulDefinitionMetaDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulDefinitionSys>;
  /** Returns all children nodes filtered by type contentfulDefinitionMetaDescriptionTextNode */
  childrenContentfulDefinitionMetaDescriptionTextNode?: Maybe<Array<Maybe<ContentfulDefinitionMetaDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulDefinitionMetaDescriptionTextNode or null if there are no children of given type on this node */
  childContentfulDefinitionMetaDescriptionTextNode?: Maybe<ContentfulDefinitionMetaDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulDefinitionCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulDefinitionUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulDefinitionMainText = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulDefinitionSecondaryText = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulDefinitionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulDefinitionSysContentType>;
};

export type ContentfulDefinitionSysContentType = {
  sys?: Maybe<ContentfulDefinitionSysContentTypeSys>;
};

export type ContentfulDefinitionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLeadMagnet = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  contentUpgrade?: Maybe<ContentfulAsset>;
  text?: Maybe<ContentfulLeadMagnetTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulLeadMagnetSys>;
  /** Returns all children nodes filtered by type contentfulLeadMagnetTextTextNode */
  childrenContentfulLeadMagnetTextTextNode?: Maybe<Array<Maybe<ContentfulLeadMagnetTextTextNode>>>;
  /** Returns the first child node of type contentfulLeadMagnetTextTextNode or null if there are no children of given type on this node */
  childContentfulLeadMagnetTextTextNode?: Maybe<ContentfulLeadMagnetTextTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulLeadMagnetCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulLeadMagnetUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulLeadMagnetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulLeadMagnetSysContentType>;
};

export type ContentfulLeadMagnetSysContentType = {
  sys?: Maybe<ContentfulLeadMagnetSysContentTypeSys>;
};

export type ContentfulLeadMagnetSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFrequentlyAskedQuestions = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<ContentfulFrequentlyAskedQuestionsAnswer>;
  fullArticle?: Maybe<ContentfulArticle>;
  category?: Maybe<Array<Maybe<ContentfulCategory>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFrequentlyAskedQuestionsSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFrequentlyAskedQuestionsCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ContentfulFrequentlyAskedQuestionsUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ContentfulFrequentlyAskedQuestionsAnswer = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulFrequentlyAskedQuestionsSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFrequentlyAskedQuestionsSysContentType>;
};

export type ContentfulFrequentlyAskedQuestionsSysContentType = {
  sys?: Maybe<ContentfulFrequentlyAskedQuestionsSysContentTypeSys>;
};

export type ContentfulFrequentlyAskedQuestionsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulLeadMagnetTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  text?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulLeadMagnetTextTextNodeSys>;
};

export type ContentfulLeadMagnetTextTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulDefinitionMetaDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  metaDescription?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulDefinitionMetaDescriptionTextNodeSys>;
};

export type ContentfulDefinitionMetaDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulCategoryPageDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  pageDescription?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulCategoryPageDescriptionTextNodeSys>;
};

export type ContentfulCategoryPageDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulArticleMetaDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  metaDescription?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulArticleMetaDescriptionTextNodeSys>;
};

export type ContentfulArticleMetaDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulArticle?: Maybe<ContentfulArticle>;
  allContentfulArticle: ContentfulArticleConnection;
  contentfulCategory?: Maybe<ContentfulCategory>;
  allContentfulCategory: ContentfulCategoryConnection;
  contentfulDefinition?: Maybe<ContentfulDefinition>;
  allContentfulDefinition: ContentfulDefinitionConnection;
  contentfulLeadMagnet?: Maybe<ContentfulLeadMagnet>;
  allContentfulLeadMagnet: ContentfulLeadMagnetConnection;
  contentfulFrequentlyAskedQuestions?: Maybe<ContentfulFrequentlyAskedQuestions>;
  allContentfulFrequentlyAskedQuestions: ContentfulFrequentlyAskedQuestionsConnection;
  contentfulLeadMagnetTextTextNode?: Maybe<ContentfulLeadMagnetTextTextNode>;
  allContentfulLeadMagnetTextTextNode: ContentfulLeadMagnetTextTextNodeConnection;
  contentfulDefinitionMetaDescriptionTextNode?: Maybe<ContentfulDefinitionMetaDescriptionTextNode>;
  allContentfulDefinitionMetaDescriptionTextNode: ContentfulDefinitionMetaDescriptionTextNodeConnection;
  contentfulCategoryPageDescriptionTextNode?: Maybe<ContentfulCategoryPageDescriptionTextNode>;
  allContentfulCategoryPageDescriptionTextNode: ContentfulCategoryPageDescriptionTextNodeConnection;
  contentfulArticleMetaDescriptionTextNode?: Maybe<ContentfulArticleMetaDescriptionTextNode>;
  allContentfulArticleMetaDescriptionTextNode: ContentfulArticleMetaDescriptionTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: InputMaybe<ContentfulEntryFilterInput>;
  sort?: InputMaybe<ContentfulEntrySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: InputMaybe<ContentfulAssetFilterInput>;
  sort?: InputMaybe<ContentfulAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulArticleArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<ContentfulArticleBodyFilterInput>;
  seoTitle?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  mainImage?: InputMaybe<ContentfulAssetFilterInput>;
  category?: InputMaybe<ContentfulCategoryFilterInput>;
  metaDescription?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulArticleSysFilterInput>;
  mustRead?: InputMaybe<BooleanQueryOperatorInput>;
  frequently_asked_questions?: InputMaybe<ContentfulFrequentlyAskedQuestionsFilterListInput>;
  childrenContentfulArticleMetaDescriptionTextNode?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterListInput>;
  childContentfulArticleMetaDescriptionTextNode?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulArticleArgs = {
  filter?: InputMaybe<ContentfulArticleFilterInput>;
  sort?: InputMaybe<ContentfulArticleSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulCategoryArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  frequentlyAskedQuestions?: InputMaybe<ContentfulFrequentlyAskedQuestionsFilterListInput>;
  article?: InputMaybe<ContentfulArticleFilterListInput>;
  pageDescription?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCategorySysFilterInput>;
  definition?: InputMaybe<ContentfulDefinitionFilterListInput>;
  keyTerms?: InputMaybe<ContentfulDefinitionFilterListInput>;
  childrenContentfulCategoryPageDescriptionTextNode?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterListInput>;
  childContentfulCategoryPageDescriptionTextNode?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulCategoryArgs = {
  filter?: InputMaybe<ContentfulCategoryFilterInput>;
  sort?: InputMaybe<ContentfulCategorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulDefinitionArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  mainText?: InputMaybe<ContentfulDefinitionMainTextFilterInput>;
  secondaryText?: InputMaybe<ContentfulDefinitionSecondaryTextFilterInput>;
  seoTitle?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<ContentfulCategoryFilterInput>;
  metaDescription?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulDefinitionSysFilterInput>;
  childrenContentfulDefinitionMetaDescriptionTextNode?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterListInput>;
  childContentfulDefinitionMetaDescriptionTextNode?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulDefinitionArgs = {
  filter?: InputMaybe<ContentfulDefinitionFilterInput>;
  sort?: InputMaybe<ContentfulDefinitionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLeadMagnetArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  contentUpgrade?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeadMagnetSysFilterInput>;
  childrenContentfulLeadMagnetTextTextNode?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterListInput>;
  childContentfulLeadMagnetTextTextNode?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulLeadMagnetArgs = {
  filter?: InputMaybe<ContentfulLeadMagnetFilterInput>;
  sort?: InputMaybe<ContentfulLeadMagnetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulFrequentlyAskedQuestionsArgs = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  question?: InputMaybe<StringQueryOperatorInput>;
  answer?: InputMaybe<ContentfulFrequentlyAskedQuestionsAnswerFilterInput>;
  fullArticle?: InputMaybe<ContentfulArticleFilterInput>;
  category?: InputMaybe<ContentfulCategoryFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFrequentlyAskedQuestionsSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentfulFrequentlyAskedQuestionsArgs = {
  filter?: InputMaybe<ContentfulFrequentlyAskedQuestionsFilterInput>;
  sort?: InputMaybe<ContentfulFrequentlyAskedQuestionsSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulLeadMagnetTextTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeadMagnetTextTextNodeSysFilterInput>;
};


export type QueryAllContentfulLeadMagnetTextTextNodeArgs = {
  filter?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterInput>;
  sort?: InputMaybe<ContentfulLeadMagnetTextTextNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulDefinitionMetaDescriptionTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulDefinitionMetaDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterInput>;
  sort?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulCategoryPageDescriptionTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  pageDescription?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulCategoryPageDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterInput>;
  sort?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulArticleMetaDescriptionTextNodeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulArticleMetaDescriptionTextNodeArgs = {
  filter?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterInput>;
  sort?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: InputMaybe<ContentfulContentTypeFilterInput>;
  sort?: InputMaybe<ContentfulContentTypeSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  titleTemplate?: InputMaybe<StringQueryOperatorInput>;
  defaultTitle?: InputMaybe<StringQueryOperatorInput>;
  defaultImage?: InputMaybe<StringQueryOperatorInput>;
  defaultDescription?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  twitterUsername?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteGraphqlTypegenFilterInput = {
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___titleTemplate'
  | 'siteMetadata___defaultTitle'
  | 'siteMetadata___defaultImage'
  | 'siteMetadata___defaultDescription'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___twitterUsername'
  | 'port'
  | 'host'
  | 'graphqlTypegen___typesOutputPath'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulEntryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetFileFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>;
  details?: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: InputMaybe<IntQueryOperatorInput>;
  image?: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'gatsbyImageData'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'url'
  | 'placeholderUrl'
  | 'mimeType'
  | 'filename'
  | 'width'
  | 'height'
  | 'size'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'filesize'
  | 'publicUrl'
  | 'resize___width'
  | 'resize___height'
  | 'resize___src'
  | 'gatsbyImage';

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  file?: InputMaybe<ContentfulAssetFileFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulAssetSysFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  placeholderUrl?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  gatsbyImage?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
};

export type ContentfulAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulArticleBodyFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategoryFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  frequentlyAskedQuestions?: InputMaybe<ContentfulFrequentlyAskedQuestionsFilterListInput>;
  article?: InputMaybe<ContentfulArticleFilterListInput>;
  pageDescription?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCategorySysFilterInput>;
  definition?: InputMaybe<ContentfulDefinitionFilterListInput>;
  keyTerms?: InputMaybe<ContentfulDefinitionFilterListInput>;
  childrenContentfulCategoryPageDescriptionTextNode?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterListInput>;
  childContentfulCategoryPageDescriptionTextNode?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFrequentlyAskedQuestionsFilterListInput = {
  elemMatch?: InputMaybe<ContentfulFrequentlyAskedQuestionsFilterInput>;
};

export type ContentfulFrequentlyAskedQuestionsFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  question?: InputMaybe<StringQueryOperatorInput>;
  answer?: InputMaybe<ContentfulFrequentlyAskedQuestionsAnswerFilterInput>;
  fullArticle?: InputMaybe<ContentfulArticleFilterInput>;
  category?: InputMaybe<ContentfulCategoryFilterListInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulFrequentlyAskedQuestionsSysFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulFrequentlyAskedQuestionsAnswerFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArticleFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  body?: InputMaybe<ContentfulArticleBodyFilterInput>;
  seoTitle?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  mainImage?: InputMaybe<ContentfulAssetFilterInput>;
  category?: InputMaybe<ContentfulCategoryFilterInput>;
  metaDescription?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulArticleSysFilterInput>;
  mustRead?: InputMaybe<BooleanQueryOperatorInput>;
  frequently_asked_questions?: InputMaybe<ContentfulFrequentlyAskedQuestionsFilterListInput>;
  childrenContentfulArticleMetaDescriptionTextNode?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterListInput>;
  childContentfulArticleMetaDescriptionTextNode?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulArticleMetaDescriptionTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeSysFilterInput>;
};

export type ContentfulArticleMetaDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArticleSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulArticleSysContentTypeFilterInput>;
};

export type ContentfulArticleSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulArticleSysContentTypeSysFilterInput>;
};

export type ContentfulArticleSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArticleMetaDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulArticleMetaDescriptionTextNodeFilterInput>;
};

export type ContentfulCategoryFilterListInput = {
  elemMatch?: InputMaybe<ContentfulCategoryFilterInput>;
};

export type ContentfulFrequentlyAskedQuestionsSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulFrequentlyAskedQuestionsSysContentTypeFilterInput>;
};

export type ContentfulFrequentlyAskedQuestionsSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulFrequentlyAskedQuestionsSysContentTypeSysFilterInput>;
};

export type ContentfulFrequentlyAskedQuestionsSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulArticleFilterListInput = {
  elemMatch?: InputMaybe<ContentfulArticleFilterInput>;
};

export type ContentfulCategoryPageDescriptionTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  pageDescription?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeSysFilterInput>;
};

export type ContentfulCategoryPageDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulCategorySysContentTypeFilterInput>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDefinitionFilterListInput = {
  elemMatch?: InputMaybe<ContentfulDefinitionFilterInput>;
};

export type ContentfulDefinitionFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  mainText?: InputMaybe<ContentfulDefinitionMainTextFilterInput>;
  secondaryText?: InputMaybe<ContentfulDefinitionSecondaryTextFilterInput>;
  seoTitle?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<ContentfulCategoryFilterInput>;
  metaDescription?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulDefinitionSysFilterInput>;
  childrenContentfulDefinitionMetaDescriptionTextNode?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterListInput>;
  childContentfulDefinitionMetaDescriptionTextNode?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulDefinitionMainTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDefinitionSecondaryTextFilterInput = {
  raw?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDefinitionMetaDescriptionTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeSysFilterInput>;
};

export type ContentfulDefinitionMetaDescriptionTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDefinitionSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulDefinitionSysContentTypeFilterInput>;
};

export type ContentfulDefinitionSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulDefinitionSysContentTypeSysFilterInput>;
};

export type ContentfulDefinitionSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulDefinitionMetaDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFilterInput>;
};

export type ContentfulCategoryPageDescriptionTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulCategoryPageDescriptionTextNodeFilterInput>;
};

export type ContentfulArticleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleEdge>;
  nodes: Array<ContentfulArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulArticleGroupConnection>;
};


export type ContentfulArticleConnectionDistinctArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleConnectionMaxArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleConnectionMinArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleConnectionSumArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulArticleFieldsEnum;
};

export type ContentfulArticleEdge = {
  next?: Maybe<ContentfulArticle>;
  node: ContentfulArticle;
  previous?: Maybe<ContentfulArticle>;
};

export type ContentfulArticleFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'body___raw'
  | 'seoTitle'
  | 'slug'
  | 'mainImage___contentful_id'
  | 'mainImage___id'
  | 'mainImage___gatsbyImageData'
  | 'mainImage___spaceId'
  | 'mainImage___createdAt'
  | 'mainImage___updatedAt'
  | 'mainImage___file___url'
  | 'mainImage___file___details___size'
  | 'mainImage___file___fileName'
  | 'mainImage___file___contentType'
  | 'mainImage___title'
  | 'mainImage___description'
  | 'mainImage___node_locale'
  | 'mainImage___sys___type'
  | 'mainImage___sys___revision'
  | 'mainImage___url'
  | 'mainImage___placeholderUrl'
  | 'mainImage___mimeType'
  | 'mainImage___filename'
  | 'mainImage___width'
  | 'mainImage___height'
  | 'mainImage___size'
  | 'mainImage___parent___id'
  | 'mainImage___parent___parent___id'
  | 'mainImage___parent___parent___children'
  | 'mainImage___parent___children'
  | 'mainImage___parent___children___id'
  | 'mainImage___parent___children___children'
  | 'mainImage___parent___internal___content'
  | 'mainImage___parent___internal___contentDigest'
  | 'mainImage___parent___internal___description'
  | 'mainImage___parent___internal___fieldOwners'
  | 'mainImage___parent___internal___ignoreType'
  | 'mainImage___parent___internal___mediaType'
  | 'mainImage___parent___internal___owner'
  | 'mainImage___parent___internal___type'
  | 'mainImage___children'
  | 'mainImage___children___id'
  | 'mainImage___children___parent___id'
  | 'mainImage___children___parent___children'
  | 'mainImage___children___children'
  | 'mainImage___children___children___id'
  | 'mainImage___children___children___children'
  | 'mainImage___children___internal___content'
  | 'mainImage___children___internal___contentDigest'
  | 'mainImage___children___internal___description'
  | 'mainImage___children___internal___fieldOwners'
  | 'mainImage___children___internal___ignoreType'
  | 'mainImage___children___internal___mediaType'
  | 'mainImage___children___internal___owner'
  | 'mainImage___children___internal___type'
  | 'mainImage___internal___content'
  | 'mainImage___internal___contentDigest'
  | 'mainImage___internal___description'
  | 'mainImage___internal___fieldOwners'
  | 'mainImage___internal___ignoreType'
  | 'mainImage___internal___mediaType'
  | 'mainImage___internal___owner'
  | 'mainImage___internal___type'
  | 'mainImage___filesize'
  | 'mainImage___publicUrl'
  | 'mainImage___resize___width'
  | 'mainImage___resize___height'
  | 'mainImage___resize___src'
  | 'mainImage___gatsbyImage'
  | 'category___contentful_id'
  | 'category___id'
  | 'category___node_locale'
  | 'category___title'
  | 'category___slug'
  | 'category___frequentlyAskedQuestions'
  | 'category___frequentlyAskedQuestions___contentful_id'
  | 'category___frequentlyAskedQuestions___id'
  | 'category___frequentlyAskedQuestions___node_locale'
  | 'category___frequentlyAskedQuestions___question'
  | 'category___frequentlyAskedQuestions___answer___raw'
  | 'category___frequentlyAskedQuestions___fullArticle___contentful_id'
  | 'category___frequentlyAskedQuestions___fullArticle___id'
  | 'category___frequentlyAskedQuestions___fullArticle___node_locale'
  | 'category___frequentlyAskedQuestions___fullArticle___title'
  | 'category___frequentlyAskedQuestions___fullArticle___seoTitle'
  | 'category___frequentlyAskedQuestions___fullArticle___slug'
  | 'category___frequentlyAskedQuestions___fullArticle___spaceId'
  | 'category___frequentlyAskedQuestions___fullArticle___createdAt'
  | 'category___frequentlyAskedQuestions___fullArticle___updatedAt'
  | 'category___frequentlyAskedQuestions___fullArticle___mustRead'
  | 'category___frequentlyAskedQuestions___fullArticle___frequently_asked_questions'
  | 'category___frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'category___frequentlyAskedQuestions___fullArticle___children'
  | 'category___frequentlyAskedQuestions___category'
  | 'category___frequentlyAskedQuestions___category___contentful_id'
  | 'category___frequentlyAskedQuestions___category___id'
  | 'category___frequentlyAskedQuestions___category___node_locale'
  | 'category___frequentlyAskedQuestions___category___title'
  | 'category___frequentlyAskedQuestions___category___slug'
  | 'category___frequentlyAskedQuestions___category___frequentlyAskedQuestions'
  | 'category___frequentlyAskedQuestions___category___article'
  | 'category___frequentlyAskedQuestions___category___spaceId'
  | 'category___frequentlyAskedQuestions___category___createdAt'
  | 'category___frequentlyAskedQuestions___category___updatedAt'
  | 'category___frequentlyAskedQuestions___category___definition'
  | 'category___frequentlyAskedQuestions___category___keyTerms'
  | 'category___frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___frequentlyAskedQuestions___category___children'
  | 'category___frequentlyAskedQuestions___spaceId'
  | 'category___frequentlyAskedQuestions___createdAt'
  | 'category___frequentlyAskedQuestions___updatedAt'
  | 'category___frequentlyAskedQuestions___sys___type'
  | 'category___frequentlyAskedQuestions___sys___revision'
  | 'category___frequentlyAskedQuestions___parent___id'
  | 'category___frequentlyAskedQuestions___parent___children'
  | 'category___frequentlyAskedQuestions___children'
  | 'category___frequentlyAskedQuestions___children___id'
  | 'category___frequentlyAskedQuestions___children___children'
  | 'category___frequentlyAskedQuestions___internal___content'
  | 'category___frequentlyAskedQuestions___internal___contentDigest'
  | 'category___frequentlyAskedQuestions___internal___description'
  | 'category___frequentlyAskedQuestions___internal___fieldOwners'
  | 'category___frequentlyAskedQuestions___internal___ignoreType'
  | 'category___frequentlyAskedQuestions___internal___mediaType'
  | 'category___frequentlyAskedQuestions___internal___owner'
  | 'category___frequentlyAskedQuestions___internal___type'
  | 'category___article'
  | 'category___article___contentful_id'
  | 'category___article___id'
  | 'category___article___node_locale'
  | 'category___article___title'
  | 'category___article___body___raw'
  | 'category___article___seoTitle'
  | 'category___article___slug'
  | 'category___article___mainImage___contentful_id'
  | 'category___article___mainImage___id'
  | 'category___article___mainImage___gatsbyImageData'
  | 'category___article___mainImage___spaceId'
  | 'category___article___mainImage___createdAt'
  | 'category___article___mainImage___updatedAt'
  | 'category___article___mainImage___title'
  | 'category___article___mainImage___description'
  | 'category___article___mainImage___node_locale'
  | 'category___article___mainImage___url'
  | 'category___article___mainImage___placeholderUrl'
  | 'category___article___mainImage___mimeType'
  | 'category___article___mainImage___filename'
  | 'category___article___mainImage___width'
  | 'category___article___mainImage___height'
  | 'category___article___mainImage___size'
  | 'category___article___mainImage___children'
  | 'category___article___mainImage___filesize'
  | 'category___article___mainImage___publicUrl'
  | 'category___article___mainImage___gatsbyImage'
  | 'category___article___category___contentful_id'
  | 'category___article___category___id'
  | 'category___article___category___node_locale'
  | 'category___article___category___title'
  | 'category___article___category___slug'
  | 'category___article___category___frequentlyAskedQuestions'
  | 'category___article___category___article'
  | 'category___article___category___spaceId'
  | 'category___article___category___createdAt'
  | 'category___article___category___updatedAt'
  | 'category___article___category___definition'
  | 'category___article___category___keyTerms'
  | 'category___article___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___article___category___children'
  | 'category___article___metaDescription___id'
  | 'category___article___metaDescription___children'
  | 'category___article___metaDescription___metaDescription'
  | 'category___article___spaceId'
  | 'category___article___createdAt'
  | 'category___article___updatedAt'
  | 'category___article___sys___type'
  | 'category___article___sys___revision'
  | 'category___article___mustRead'
  | 'category___article___frequently_asked_questions'
  | 'category___article___frequently_asked_questions___contentful_id'
  | 'category___article___frequently_asked_questions___id'
  | 'category___article___frequently_asked_questions___node_locale'
  | 'category___article___frequently_asked_questions___question'
  | 'category___article___frequently_asked_questions___category'
  | 'category___article___frequently_asked_questions___spaceId'
  | 'category___article___frequently_asked_questions___createdAt'
  | 'category___article___frequently_asked_questions___updatedAt'
  | 'category___article___frequently_asked_questions___children'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___id'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___children'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'category___article___parent___id'
  | 'category___article___parent___children'
  | 'category___article___children'
  | 'category___article___children___id'
  | 'category___article___children___children'
  | 'category___article___internal___content'
  | 'category___article___internal___contentDigest'
  | 'category___article___internal___description'
  | 'category___article___internal___fieldOwners'
  | 'category___article___internal___ignoreType'
  | 'category___article___internal___mediaType'
  | 'category___article___internal___owner'
  | 'category___article___internal___type'
  | 'category___pageDescription___id'
  | 'category___pageDescription___parent___id'
  | 'category___pageDescription___parent___children'
  | 'category___pageDescription___children'
  | 'category___pageDescription___children___id'
  | 'category___pageDescription___children___children'
  | 'category___pageDescription___internal___content'
  | 'category___pageDescription___internal___contentDigest'
  | 'category___pageDescription___internal___description'
  | 'category___pageDescription___internal___fieldOwners'
  | 'category___pageDescription___internal___ignoreType'
  | 'category___pageDescription___internal___mediaType'
  | 'category___pageDescription___internal___owner'
  | 'category___pageDescription___internal___type'
  | 'category___pageDescription___pageDescription'
  | 'category___pageDescription___sys___type'
  | 'category___spaceId'
  | 'category___createdAt'
  | 'category___updatedAt'
  | 'category___sys___type'
  | 'category___sys___revision'
  | 'category___definition'
  | 'category___definition___contentful_id'
  | 'category___definition___id'
  | 'category___definition___node_locale'
  | 'category___definition___title'
  | 'category___definition___mainText___raw'
  | 'category___definition___secondaryText___raw'
  | 'category___definition___seoTitle'
  | 'category___definition___slug'
  | 'category___definition___category___contentful_id'
  | 'category___definition___category___id'
  | 'category___definition___category___node_locale'
  | 'category___definition___category___title'
  | 'category___definition___category___slug'
  | 'category___definition___category___frequentlyAskedQuestions'
  | 'category___definition___category___article'
  | 'category___definition___category___spaceId'
  | 'category___definition___category___createdAt'
  | 'category___definition___category___updatedAt'
  | 'category___definition___category___definition'
  | 'category___definition___category___keyTerms'
  | 'category___definition___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___definition___category___children'
  | 'category___definition___metaDescription___id'
  | 'category___definition___metaDescription___children'
  | 'category___definition___metaDescription___metaDescription'
  | 'category___definition___spaceId'
  | 'category___definition___createdAt'
  | 'category___definition___updatedAt'
  | 'category___definition___sys___type'
  | 'category___definition___sys___revision'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___definition___parent___id'
  | 'category___definition___parent___children'
  | 'category___definition___children'
  | 'category___definition___children___id'
  | 'category___definition___children___children'
  | 'category___definition___internal___content'
  | 'category___definition___internal___contentDigest'
  | 'category___definition___internal___description'
  | 'category___definition___internal___fieldOwners'
  | 'category___definition___internal___ignoreType'
  | 'category___definition___internal___mediaType'
  | 'category___definition___internal___owner'
  | 'category___definition___internal___type'
  | 'category___keyTerms'
  | 'category___keyTerms___contentful_id'
  | 'category___keyTerms___id'
  | 'category___keyTerms___node_locale'
  | 'category___keyTerms___title'
  | 'category___keyTerms___mainText___raw'
  | 'category___keyTerms___secondaryText___raw'
  | 'category___keyTerms___seoTitle'
  | 'category___keyTerms___slug'
  | 'category___keyTerms___category___contentful_id'
  | 'category___keyTerms___category___id'
  | 'category___keyTerms___category___node_locale'
  | 'category___keyTerms___category___title'
  | 'category___keyTerms___category___slug'
  | 'category___keyTerms___category___frequentlyAskedQuestions'
  | 'category___keyTerms___category___article'
  | 'category___keyTerms___category___spaceId'
  | 'category___keyTerms___category___createdAt'
  | 'category___keyTerms___category___updatedAt'
  | 'category___keyTerms___category___definition'
  | 'category___keyTerms___category___keyTerms'
  | 'category___keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___keyTerms___category___children'
  | 'category___keyTerms___metaDescription___id'
  | 'category___keyTerms___metaDescription___children'
  | 'category___keyTerms___metaDescription___metaDescription'
  | 'category___keyTerms___spaceId'
  | 'category___keyTerms___createdAt'
  | 'category___keyTerms___updatedAt'
  | 'category___keyTerms___sys___type'
  | 'category___keyTerms___sys___revision'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___keyTerms___parent___id'
  | 'category___keyTerms___parent___children'
  | 'category___keyTerms___children'
  | 'category___keyTerms___children___id'
  | 'category___keyTerms___children___children'
  | 'category___keyTerms___internal___content'
  | 'category___keyTerms___internal___contentDigest'
  | 'category___keyTerms___internal___description'
  | 'category___keyTerms___internal___fieldOwners'
  | 'category___keyTerms___internal___ignoreType'
  | 'category___keyTerms___internal___mediaType'
  | 'category___keyTerms___internal___owner'
  | 'category___keyTerms___internal___type'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'category___childContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'metaDescription___id'
  | 'metaDescription___parent___id'
  | 'metaDescription___parent___parent___id'
  | 'metaDescription___parent___parent___children'
  | 'metaDescription___parent___children'
  | 'metaDescription___parent___children___id'
  | 'metaDescription___parent___children___children'
  | 'metaDescription___parent___internal___content'
  | 'metaDescription___parent___internal___contentDigest'
  | 'metaDescription___parent___internal___description'
  | 'metaDescription___parent___internal___fieldOwners'
  | 'metaDescription___parent___internal___ignoreType'
  | 'metaDescription___parent___internal___mediaType'
  | 'metaDescription___parent___internal___owner'
  | 'metaDescription___parent___internal___type'
  | 'metaDescription___children'
  | 'metaDescription___children___id'
  | 'metaDescription___children___parent___id'
  | 'metaDescription___children___parent___children'
  | 'metaDescription___children___children'
  | 'metaDescription___children___children___id'
  | 'metaDescription___children___children___children'
  | 'metaDescription___children___internal___content'
  | 'metaDescription___children___internal___contentDigest'
  | 'metaDescription___children___internal___description'
  | 'metaDescription___children___internal___fieldOwners'
  | 'metaDescription___children___internal___ignoreType'
  | 'metaDescription___children___internal___mediaType'
  | 'metaDescription___children___internal___owner'
  | 'metaDescription___children___internal___type'
  | 'metaDescription___internal___content'
  | 'metaDescription___internal___contentDigest'
  | 'metaDescription___internal___description'
  | 'metaDescription___internal___fieldOwners'
  | 'metaDescription___internal___ignoreType'
  | 'metaDescription___internal___mediaType'
  | 'metaDescription___internal___owner'
  | 'metaDescription___internal___type'
  | 'metaDescription___metaDescription'
  | 'metaDescription___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'mustRead'
  | 'frequently_asked_questions'
  | 'frequently_asked_questions___contentful_id'
  | 'frequently_asked_questions___id'
  | 'frequently_asked_questions___node_locale'
  | 'frequently_asked_questions___question'
  | 'frequently_asked_questions___answer___raw'
  | 'frequently_asked_questions___fullArticle___contentful_id'
  | 'frequently_asked_questions___fullArticle___id'
  | 'frequently_asked_questions___fullArticle___node_locale'
  | 'frequently_asked_questions___fullArticle___title'
  | 'frequently_asked_questions___fullArticle___body___raw'
  | 'frequently_asked_questions___fullArticle___seoTitle'
  | 'frequently_asked_questions___fullArticle___slug'
  | 'frequently_asked_questions___fullArticle___mainImage___contentful_id'
  | 'frequently_asked_questions___fullArticle___mainImage___id'
  | 'frequently_asked_questions___fullArticle___mainImage___gatsbyImageData'
  | 'frequently_asked_questions___fullArticle___mainImage___spaceId'
  | 'frequently_asked_questions___fullArticle___mainImage___createdAt'
  | 'frequently_asked_questions___fullArticle___mainImage___updatedAt'
  | 'frequently_asked_questions___fullArticle___mainImage___title'
  | 'frequently_asked_questions___fullArticle___mainImage___description'
  | 'frequently_asked_questions___fullArticle___mainImage___node_locale'
  | 'frequently_asked_questions___fullArticle___mainImage___url'
  | 'frequently_asked_questions___fullArticle___mainImage___placeholderUrl'
  | 'frequently_asked_questions___fullArticle___mainImage___mimeType'
  | 'frequently_asked_questions___fullArticle___mainImage___filename'
  | 'frequently_asked_questions___fullArticle___mainImage___width'
  | 'frequently_asked_questions___fullArticle___mainImage___height'
  | 'frequently_asked_questions___fullArticle___mainImage___size'
  | 'frequently_asked_questions___fullArticle___mainImage___children'
  | 'frequently_asked_questions___fullArticle___mainImage___filesize'
  | 'frequently_asked_questions___fullArticle___mainImage___publicUrl'
  | 'frequently_asked_questions___fullArticle___mainImage___gatsbyImage'
  | 'frequently_asked_questions___fullArticle___category___contentful_id'
  | 'frequently_asked_questions___fullArticle___category___id'
  | 'frequently_asked_questions___fullArticle___category___node_locale'
  | 'frequently_asked_questions___fullArticle___category___title'
  | 'frequently_asked_questions___fullArticle___category___slug'
  | 'frequently_asked_questions___fullArticle___category___frequentlyAskedQuestions'
  | 'frequently_asked_questions___fullArticle___category___article'
  | 'frequently_asked_questions___fullArticle___category___spaceId'
  | 'frequently_asked_questions___fullArticle___category___createdAt'
  | 'frequently_asked_questions___fullArticle___category___updatedAt'
  | 'frequently_asked_questions___fullArticle___category___definition'
  | 'frequently_asked_questions___fullArticle___category___keyTerms'
  | 'frequently_asked_questions___fullArticle___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'frequently_asked_questions___fullArticle___category___children'
  | 'frequently_asked_questions___fullArticle___metaDescription___id'
  | 'frequently_asked_questions___fullArticle___metaDescription___children'
  | 'frequently_asked_questions___fullArticle___metaDescription___metaDescription'
  | 'frequently_asked_questions___fullArticle___spaceId'
  | 'frequently_asked_questions___fullArticle___createdAt'
  | 'frequently_asked_questions___fullArticle___updatedAt'
  | 'frequently_asked_questions___fullArticle___sys___type'
  | 'frequently_asked_questions___fullArticle___sys___revision'
  | 'frequently_asked_questions___fullArticle___mustRead'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___contentful_id'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___id'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___node_locale'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___question'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___category'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___spaceId'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___createdAt'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___updatedAt'
  | 'frequently_asked_questions___fullArticle___frequently_asked_questions___children'
  | 'frequently_asked_questions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'frequently_asked_questions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'frequently_asked_questions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'frequently_asked_questions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'frequently_asked_questions___fullArticle___childContentfulArticleMetaDescriptionTextNode___id'
  | 'frequently_asked_questions___fullArticle___childContentfulArticleMetaDescriptionTextNode___children'
  | 'frequently_asked_questions___fullArticle___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'frequently_asked_questions___fullArticle___parent___id'
  | 'frequently_asked_questions___fullArticle___parent___children'
  | 'frequently_asked_questions___fullArticle___children'
  | 'frequently_asked_questions___fullArticle___children___id'
  | 'frequently_asked_questions___fullArticle___children___children'
  | 'frequently_asked_questions___fullArticle___internal___content'
  | 'frequently_asked_questions___fullArticle___internal___contentDigest'
  | 'frequently_asked_questions___fullArticle___internal___description'
  | 'frequently_asked_questions___fullArticle___internal___fieldOwners'
  | 'frequently_asked_questions___fullArticle___internal___ignoreType'
  | 'frequently_asked_questions___fullArticle___internal___mediaType'
  | 'frequently_asked_questions___fullArticle___internal___owner'
  | 'frequently_asked_questions___fullArticle___internal___type'
  | 'frequently_asked_questions___category'
  | 'frequently_asked_questions___category___contentful_id'
  | 'frequently_asked_questions___category___id'
  | 'frequently_asked_questions___category___node_locale'
  | 'frequently_asked_questions___category___title'
  | 'frequently_asked_questions___category___slug'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___contentful_id'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___id'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___node_locale'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___question'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___category'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___spaceId'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___createdAt'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___updatedAt'
  | 'frequently_asked_questions___category___frequentlyAskedQuestions___children'
  | 'frequently_asked_questions___category___article'
  | 'frequently_asked_questions___category___article___contentful_id'
  | 'frequently_asked_questions___category___article___id'
  | 'frequently_asked_questions___category___article___node_locale'
  | 'frequently_asked_questions___category___article___title'
  | 'frequently_asked_questions___category___article___seoTitle'
  | 'frequently_asked_questions___category___article___slug'
  | 'frequently_asked_questions___category___article___spaceId'
  | 'frequently_asked_questions___category___article___createdAt'
  | 'frequently_asked_questions___category___article___updatedAt'
  | 'frequently_asked_questions___category___article___mustRead'
  | 'frequently_asked_questions___category___article___frequently_asked_questions'
  | 'frequently_asked_questions___category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'frequently_asked_questions___category___article___children'
  | 'frequently_asked_questions___category___pageDescription___id'
  | 'frequently_asked_questions___category___pageDescription___children'
  | 'frequently_asked_questions___category___pageDescription___pageDescription'
  | 'frequently_asked_questions___category___spaceId'
  | 'frequently_asked_questions___category___createdAt'
  | 'frequently_asked_questions___category___updatedAt'
  | 'frequently_asked_questions___category___sys___type'
  | 'frequently_asked_questions___category___sys___revision'
  | 'frequently_asked_questions___category___definition'
  | 'frequently_asked_questions___category___definition___contentful_id'
  | 'frequently_asked_questions___category___definition___id'
  | 'frequently_asked_questions___category___definition___node_locale'
  | 'frequently_asked_questions___category___definition___title'
  | 'frequently_asked_questions___category___definition___seoTitle'
  | 'frequently_asked_questions___category___definition___slug'
  | 'frequently_asked_questions___category___definition___spaceId'
  | 'frequently_asked_questions___category___definition___createdAt'
  | 'frequently_asked_questions___category___definition___updatedAt'
  | 'frequently_asked_questions___category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'frequently_asked_questions___category___definition___children'
  | 'frequently_asked_questions___category___keyTerms'
  | 'frequently_asked_questions___category___keyTerms___contentful_id'
  | 'frequently_asked_questions___category___keyTerms___id'
  | 'frequently_asked_questions___category___keyTerms___node_locale'
  | 'frequently_asked_questions___category___keyTerms___title'
  | 'frequently_asked_questions___category___keyTerms___seoTitle'
  | 'frequently_asked_questions___category___keyTerms___slug'
  | 'frequently_asked_questions___category___keyTerms___spaceId'
  | 'frequently_asked_questions___category___keyTerms___createdAt'
  | 'frequently_asked_questions___category___keyTerms___updatedAt'
  | 'frequently_asked_questions___category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'frequently_asked_questions___category___keyTerms___children'
  | 'frequently_asked_questions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'frequently_asked_questions___category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'frequently_asked_questions___category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'frequently_asked_questions___category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'frequently_asked_questions___category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'frequently_asked_questions___category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'frequently_asked_questions___category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'frequently_asked_questions___category___parent___id'
  | 'frequently_asked_questions___category___parent___children'
  | 'frequently_asked_questions___category___children'
  | 'frequently_asked_questions___category___children___id'
  | 'frequently_asked_questions___category___children___children'
  | 'frequently_asked_questions___category___internal___content'
  | 'frequently_asked_questions___category___internal___contentDigest'
  | 'frequently_asked_questions___category___internal___description'
  | 'frequently_asked_questions___category___internal___fieldOwners'
  | 'frequently_asked_questions___category___internal___ignoreType'
  | 'frequently_asked_questions___category___internal___mediaType'
  | 'frequently_asked_questions___category___internal___owner'
  | 'frequently_asked_questions___category___internal___type'
  | 'frequently_asked_questions___spaceId'
  | 'frequently_asked_questions___createdAt'
  | 'frequently_asked_questions___updatedAt'
  | 'frequently_asked_questions___sys___type'
  | 'frequently_asked_questions___sys___revision'
  | 'frequently_asked_questions___parent___id'
  | 'frequently_asked_questions___parent___parent___id'
  | 'frequently_asked_questions___parent___parent___children'
  | 'frequently_asked_questions___parent___children'
  | 'frequently_asked_questions___parent___children___id'
  | 'frequently_asked_questions___parent___children___children'
  | 'frequently_asked_questions___parent___internal___content'
  | 'frequently_asked_questions___parent___internal___contentDigest'
  | 'frequently_asked_questions___parent___internal___description'
  | 'frequently_asked_questions___parent___internal___fieldOwners'
  | 'frequently_asked_questions___parent___internal___ignoreType'
  | 'frequently_asked_questions___parent___internal___mediaType'
  | 'frequently_asked_questions___parent___internal___owner'
  | 'frequently_asked_questions___parent___internal___type'
  | 'frequently_asked_questions___children'
  | 'frequently_asked_questions___children___id'
  | 'frequently_asked_questions___children___parent___id'
  | 'frequently_asked_questions___children___parent___children'
  | 'frequently_asked_questions___children___children'
  | 'frequently_asked_questions___children___children___id'
  | 'frequently_asked_questions___children___children___children'
  | 'frequently_asked_questions___children___internal___content'
  | 'frequently_asked_questions___children___internal___contentDigest'
  | 'frequently_asked_questions___children___internal___description'
  | 'frequently_asked_questions___children___internal___fieldOwners'
  | 'frequently_asked_questions___children___internal___ignoreType'
  | 'frequently_asked_questions___children___internal___mediaType'
  | 'frequently_asked_questions___children___internal___owner'
  | 'frequently_asked_questions___children___internal___type'
  | 'frequently_asked_questions___internal___content'
  | 'frequently_asked_questions___internal___contentDigest'
  | 'frequently_asked_questions___internal___description'
  | 'frequently_asked_questions___internal___fieldOwners'
  | 'frequently_asked_questions___internal___ignoreType'
  | 'frequently_asked_questions___internal___mediaType'
  | 'frequently_asked_questions___internal___owner'
  | 'frequently_asked_questions___internal___type'
  | 'childrenContentfulArticleMetaDescriptionTextNode'
  | 'childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___children___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___children___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulArticleMetaDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___parent___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___parent___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___children___id'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___children___children'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___content'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___description'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulArticleMetaDescriptionTextNode___children___internal___type'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___content'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___description'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___owner'
  | 'childrenContentfulArticleMetaDescriptionTextNode___internal___type'
  | 'childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'childrenContentfulArticleMetaDescriptionTextNode___sys___type'
  | 'childContentfulArticleMetaDescriptionTextNode___id'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___id'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___parent___id'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___parent___children'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___children'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___children___id'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___children___children'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___content'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___description'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___owner'
  | 'childContentfulArticleMetaDescriptionTextNode___parent___internal___type'
  | 'childContentfulArticleMetaDescriptionTextNode___children'
  | 'childContentfulArticleMetaDescriptionTextNode___children___id'
  | 'childContentfulArticleMetaDescriptionTextNode___children___parent___id'
  | 'childContentfulArticleMetaDescriptionTextNode___children___parent___children'
  | 'childContentfulArticleMetaDescriptionTextNode___children___children'
  | 'childContentfulArticleMetaDescriptionTextNode___children___children___id'
  | 'childContentfulArticleMetaDescriptionTextNode___children___children___children'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___content'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___description'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___owner'
  | 'childContentfulArticleMetaDescriptionTextNode___children___internal___type'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___content'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___contentDigest'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___description'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___ignoreType'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___mediaType'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___owner'
  | 'childContentfulArticleMetaDescriptionTextNode___internal___type'
  | 'childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'childContentfulArticleMetaDescriptionTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulArticleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleEdge>;
  nodes: Array<ContentfulArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulArticleGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulArticleGroupConnectionDistinctArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleGroupConnectionMaxArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleGroupConnectionMinArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleGroupConnectionSumArgs = {
  field: ContentfulArticleFieldsEnum;
};


export type ContentfulArticleGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulArticleFieldsEnum;
};

export type ContentfulArticleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulArticleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulCategoryGroupConnection>;
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionMaxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionMinArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionSumArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  next?: Maybe<ContentfulCategory>;
  node: ContentfulCategory;
  previous?: Maybe<ContentfulCategory>;
};

export type ContentfulCategoryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'frequentlyAskedQuestions'
  | 'frequentlyAskedQuestions___contentful_id'
  | 'frequentlyAskedQuestions___id'
  | 'frequentlyAskedQuestions___node_locale'
  | 'frequentlyAskedQuestions___question'
  | 'frequentlyAskedQuestions___answer___raw'
  | 'frequentlyAskedQuestions___fullArticle___contentful_id'
  | 'frequentlyAskedQuestions___fullArticle___id'
  | 'frequentlyAskedQuestions___fullArticle___node_locale'
  | 'frequentlyAskedQuestions___fullArticle___title'
  | 'frequentlyAskedQuestions___fullArticle___body___raw'
  | 'frequentlyAskedQuestions___fullArticle___seoTitle'
  | 'frequentlyAskedQuestions___fullArticle___slug'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___contentful_id'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___id'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___gatsbyImageData'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___spaceId'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___createdAt'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___updatedAt'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___title'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___description'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___node_locale'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___url'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___placeholderUrl'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___mimeType'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___filename'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___width'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___height'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___size'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___children'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___filesize'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___publicUrl'
  | 'frequentlyAskedQuestions___fullArticle___mainImage___gatsbyImage'
  | 'frequentlyAskedQuestions___fullArticle___category___contentful_id'
  | 'frequentlyAskedQuestions___fullArticle___category___id'
  | 'frequentlyAskedQuestions___fullArticle___category___node_locale'
  | 'frequentlyAskedQuestions___fullArticle___category___title'
  | 'frequentlyAskedQuestions___fullArticle___category___slug'
  | 'frequentlyAskedQuestions___fullArticle___category___frequentlyAskedQuestions'
  | 'frequentlyAskedQuestions___fullArticle___category___article'
  | 'frequentlyAskedQuestions___fullArticle___category___spaceId'
  | 'frequentlyAskedQuestions___fullArticle___category___createdAt'
  | 'frequentlyAskedQuestions___fullArticle___category___updatedAt'
  | 'frequentlyAskedQuestions___fullArticle___category___definition'
  | 'frequentlyAskedQuestions___fullArticle___category___keyTerms'
  | 'frequentlyAskedQuestions___fullArticle___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'frequentlyAskedQuestions___fullArticle___category___children'
  | 'frequentlyAskedQuestions___fullArticle___metaDescription___id'
  | 'frequentlyAskedQuestions___fullArticle___metaDescription___children'
  | 'frequentlyAskedQuestions___fullArticle___metaDescription___metaDescription'
  | 'frequentlyAskedQuestions___fullArticle___spaceId'
  | 'frequentlyAskedQuestions___fullArticle___createdAt'
  | 'frequentlyAskedQuestions___fullArticle___updatedAt'
  | 'frequentlyAskedQuestions___fullArticle___sys___type'
  | 'frequentlyAskedQuestions___fullArticle___sys___revision'
  | 'frequentlyAskedQuestions___fullArticle___mustRead'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___contentful_id'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___id'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___node_locale'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___question'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___category'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___spaceId'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___createdAt'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___updatedAt'
  | 'frequentlyAskedQuestions___fullArticle___frequently_asked_questions___children'
  | 'frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'frequentlyAskedQuestions___fullArticle___childContentfulArticleMetaDescriptionTextNode___id'
  | 'frequentlyAskedQuestions___fullArticle___childContentfulArticleMetaDescriptionTextNode___children'
  | 'frequentlyAskedQuestions___fullArticle___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'frequentlyAskedQuestions___fullArticle___parent___id'
  | 'frequentlyAskedQuestions___fullArticle___parent___children'
  | 'frequentlyAskedQuestions___fullArticle___children'
  | 'frequentlyAskedQuestions___fullArticle___children___id'
  | 'frequentlyAskedQuestions___fullArticle___children___children'
  | 'frequentlyAskedQuestions___fullArticle___internal___content'
  | 'frequentlyAskedQuestions___fullArticle___internal___contentDigest'
  | 'frequentlyAskedQuestions___fullArticle___internal___description'
  | 'frequentlyAskedQuestions___fullArticle___internal___fieldOwners'
  | 'frequentlyAskedQuestions___fullArticle___internal___ignoreType'
  | 'frequentlyAskedQuestions___fullArticle___internal___mediaType'
  | 'frequentlyAskedQuestions___fullArticle___internal___owner'
  | 'frequentlyAskedQuestions___fullArticle___internal___type'
  | 'frequentlyAskedQuestions___category'
  | 'frequentlyAskedQuestions___category___contentful_id'
  | 'frequentlyAskedQuestions___category___id'
  | 'frequentlyAskedQuestions___category___node_locale'
  | 'frequentlyAskedQuestions___category___title'
  | 'frequentlyAskedQuestions___category___slug'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___contentful_id'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___id'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___node_locale'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___question'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___category'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___spaceId'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___createdAt'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___updatedAt'
  | 'frequentlyAskedQuestions___category___frequentlyAskedQuestions___children'
  | 'frequentlyAskedQuestions___category___article'
  | 'frequentlyAskedQuestions___category___article___contentful_id'
  | 'frequentlyAskedQuestions___category___article___id'
  | 'frequentlyAskedQuestions___category___article___node_locale'
  | 'frequentlyAskedQuestions___category___article___title'
  | 'frequentlyAskedQuestions___category___article___seoTitle'
  | 'frequentlyAskedQuestions___category___article___slug'
  | 'frequentlyAskedQuestions___category___article___spaceId'
  | 'frequentlyAskedQuestions___category___article___createdAt'
  | 'frequentlyAskedQuestions___category___article___updatedAt'
  | 'frequentlyAskedQuestions___category___article___mustRead'
  | 'frequentlyAskedQuestions___category___article___frequently_asked_questions'
  | 'frequentlyAskedQuestions___category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'frequentlyAskedQuestions___category___article___children'
  | 'frequentlyAskedQuestions___category___pageDescription___id'
  | 'frequentlyAskedQuestions___category___pageDescription___children'
  | 'frequentlyAskedQuestions___category___pageDescription___pageDescription'
  | 'frequentlyAskedQuestions___category___spaceId'
  | 'frequentlyAskedQuestions___category___createdAt'
  | 'frequentlyAskedQuestions___category___updatedAt'
  | 'frequentlyAskedQuestions___category___sys___type'
  | 'frequentlyAskedQuestions___category___sys___revision'
  | 'frequentlyAskedQuestions___category___definition'
  | 'frequentlyAskedQuestions___category___definition___contentful_id'
  | 'frequentlyAskedQuestions___category___definition___id'
  | 'frequentlyAskedQuestions___category___definition___node_locale'
  | 'frequentlyAskedQuestions___category___definition___title'
  | 'frequentlyAskedQuestions___category___definition___seoTitle'
  | 'frequentlyAskedQuestions___category___definition___slug'
  | 'frequentlyAskedQuestions___category___definition___spaceId'
  | 'frequentlyAskedQuestions___category___definition___createdAt'
  | 'frequentlyAskedQuestions___category___definition___updatedAt'
  | 'frequentlyAskedQuestions___category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'frequentlyAskedQuestions___category___definition___children'
  | 'frequentlyAskedQuestions___category___keyTerms'
  | 'frequentlyAskedQuestions___category___keyTerms___contentful_id'
  | 'frequentlyAskedQuestions___category___keyTerms___id'
  | 'frequentlyAskedQuestions___category___keyTerms___node_locale'
  | 'frequentlyAskedQuestions___category___keyTerms___title'
  | 'frequentlyAskedQuestions___category___keyTerms___seoTitle'
  | 'frequentlyAskedQuestions___category___keyTerms___slug'
  | 'frequentlyAskedQuestions___category___keyTerms___spaceId'
  | 'frequentlyAskedQuestions___category___keyTerms___createdAt'
  | 'frequentlyAskedQuestions___category___keyTerms___updatedAt'
  | 'frequentlyAskedQuestions___category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'frequentlyAskedQuestions___category___keyTerms___children'
  | 'frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'frequentlyAskedQuestions___category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'frequentlyAskedQuestions___category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'frequentlyAskedQuestions___category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'frequentlyAskedQuestions___category___parent___id'
  | 'frequentlyAskedQuestions___category___parent___children'
  | 'frequentlyAskedQuestions___category___children'
  | 'frequentlyAskedQuestions___category___children___id'
  | 'frequentlyAskedQuestions___category___children___children'
  | 'frequentlyAskedQuestions___category___internal___content'
  | 'frequentlyAskedQuestions___category___internal___contentDigest'
  | 'frequentlyAskedQuestions___category___internal___description'
  | 'frequentlyAskedQuestions___category___internal___fieldOwners'
  | 'frequentlyAskedQuestions___category___internal___ignoreType'
  | 'frequentlyAskedQuestions___category___internal___mediaType'
  | 'frequentlyAskedQuestions___category___internal___owner'
  | 'frequentlyAskedQuestions___category___internal___type'
  | 'frequentlyAskedQuestions___spaceId'
  | 'frequentlyAskedQuestions___createdAt'
  | 'frequentlyAskedQuestions___updatedAt'
  | 'frequentlyAskedQuestions___sys___type'
  | 'frequentlyAskedQuestions___sys___revision'
  | 'frequentlyAskedQuestions___parent___id'
  | 'frequentlyAskedQuestions___parent___parent___id'
  | 'frequentlyAskedQuestions___parent___parent___children'
  | 'frequentlyAskedQuestions___parent___children'
  | 'frequentlyAskedQuestions___parent___children___id'
  | 'frequentlyAskedQuestions___parent___children___children'
  | 'frequentlyAskedQuestions___parent___internal___content'
  | 'frequentlyAskedQuestions___parent___internal___contentDigest'
  | 'frequentlyAskedQuestions___parent___internal___description'
  | 'frequentlyAskedQuestions___parent___internal___fieldOwners'
  | 'frequentlyAskedQuestions___parent___internal___ignoreType'
  | 'frequentlyAskedQuestions___parent___internal___mediaType'
  | 'frequentlyAskedQuestions___parent___internal___owner'
  | 'frequentlyAskedQuestions___parent___internal___type'
  | 'frequentlyAskedQuestions___children'
  | 'frequentlyAskedQuestions___children___id'
  | 'frequentlyAskedQuestions___children___parent___id'
  | 'frequentlyAskedQuestions___children___parent___children'
  | 'frequentlyAskedQuestions___children___children'
  | 'frequentlyAskedQuestions___children___children___id'
  | 'frequentlyAskedQuestions___children___children___children'
  | 'frequentlyAskedQuestions___children___internal___content'
  | 'frequentlyAskedQuestions___children___internal___contentDigest'
  | 'frequentlyAskedQuestions___children___internal___description'
  | 'frequentlyAskedQuestions___children___internal___fieldOwners'
  | 'frequentlyAskedQuestions___children___internal___ignoreType'
  | 'frequentlyAskedQuestions___children___internal___mediaType'
  | 'frequentlyAskedQuestions___children___internal___owner'
  | 'frequentlyAskedQuestions___children___internal___type'
  | 'frequentlyAskedQuestions___internal___content'
  | 'frequentlyAskedQuestions___internal___contentDigest'
  | 'frequentlyAskedQuestions___internal___description'
  | 'frequentlyAskedQuestions___internal___fieldOwners'
  | 'frequentlyAskedQuestions___internal___ignoreType'
  | 'frequentlyAskedQuestions___internal___mediaType'
  | 'frequentlyAskedQuestions___internal___owner'
  | 'frequentlyAskedQuestions___internal___type'
  | 'article'
  | 'article___contentful_id'
  | 'article___id'
  | 'article___node_locale'
  | 'article___title'
  | 'article___body___raw'
  | 'article___seoTitle'
  | 'article___slug'
  | 'article___mainImage___contentful_id'
  | 'article___mainImage___id'
  | 'article___mainImage___gatsbyImageData'
  | 'article___mainImage___spaceId'
  | 'article___mainImage___createdAt'
  | 'article___mainImage___updatedAt'
  | 'article___mainImage___file___url'
  | 'article___mainImage___file___fileName'
  | 'article___mainImage___file___contentType'
  | 'article___mainImage___title'
  | 'article___mainImage___description'
  | 'article___mainImage___node_locale'
  | 'article___mainImage___sys___type'
  | 'article___mainImage___sys___revision'
  | 'article___mainImage___url'
  | 'article___mainImage___placeholderUrl'
  | 'article___mainImage___mimeType'
  | 'article___mainImage___filename'
  | 'article___mainImage___width'
  | 'article___mainImage___height'
  | 'article___mainImage___size'
  | 'article___mainImage___parent___id'
  | 'article___mainImage___parent___children'
  | 'article___mainImage___children'
  | 'article___mainImage___children___id'
  | 'article___mainImage___children___children'
  | 'article___mainImage___internal___content'
  | 'article___mainImage___internal___contentDigest'
  | 'article___mainImage___internal___description'
  | 'article___mainImage___internal___fieldOwners'
  | 'article___mainImage___internal___ignoreType'
  | 'article___mainImage___internal___mediaType'
  | 'article___mainImage___internal___owner'
  | 'article___mainImage___internal___type'
  | 'article___mainImage___filesize'
  | 'article___mainImage___publicUrl'
  | 'article___mainImage___resize___width'
  | 'article___mainImage___resize___height'
  | 'article___mainImage___resize___src'
  | 'article___mainImage___gatsbyImage'
  | 'article___category___contentful_id'
  | 'article___category___id'
  | 'article___category___node_locale'
  | 'article___category___title'
  | 'article___category___slug'
  | 'article___category___frequentlyAskedQuestions'
  | 'article___category___frequentlyAskedQuestions___contentful_id'
  | 'article___category___frequentlyAskedQuestions___id'
  | 'article___category___frequentlyAskedQuestions___node_locale'
  | 'article___category___frequentlyAskedQuestions___question'
  | 'article___category___frequentlyAskedQuestions___category'
  | 'article___category___frequentlyAskedQuestions___spaceId'
  | 'article___category___frequentlyAskedQuestions___createdAt'
  | 'article___category___frequentlyAskedQuestions___updatedAt'
  | 'article___category___frequentlyAskedQuestions___children'
  | 'article___category___article'
  | 'article___category___article___contentful_id'
  | 'article___category___article___id'
  | 'article___category___article___node_locale'
  | 'article___category___article___title'
  | 'article___category___article___seoTitle'
  | 'article___category___article___slug'
  | 'article___category___article___spaceId'
  | 'article___category___article___createdAt'
  | 'article___category___article___updatedAt'
  | 'article___category___article___mustRead'
  | 'article___category___article___frequently_asked_questions'
  | 'article___category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'article___category___article___children'
  | 'article___category___pageDescription___id'
  | 'article___category___pageDescription___children'
  | 'article___category___pageDescription___pageDescription'
  | 'article___category___spaceId'
  | 'article___category___createdAt'
  | 'article___category___updatedAt'
  | 'article___category___sys___type'
  | 'article___category___sys___revision'
  | 'article___category___definition'
  | 'article___category___definition___contentful_id'
  | 'article___category___definition___id'
  | 'article___category___definition___node_locale'
  | 'article___category___definition___title'
  | 'article___category___definition___seoTitle'
  | 'article___category___definition___slug'
  | 'article___category___definition___spaceId'
  | 'article___category___definition___createdAt'
  | 'article___category___definition___updatedAt'
  | 'article___category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'article___category___definition___children'
  | 'article___category___keyTerms'
  | 'article___category___keyTerms___contentful_id'
  | 'article___category___keyTerms___id'
  | 'article___category___keyTerms___node_locale'
  | 'article___category___keyTerms___title'
  | 'article___category___keyTerms___seoTitle'
  | 'article___category___keyTerms___slug'
  | 'article___category___keyTerms___spaceId'
  | 'article___category___keyTerms___createdAt'
  | 'article___category___keyTerms___updatedAt'
  | 'article___category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'article___category___keyTerms___children'
  | 'article___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'article___category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'article___category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'article___category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'article___category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'article___category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'article___category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'article___category___parent___id'
  | 'article___category___parent___children'
  | 'article___category___children'
  | 'article___category___children___id'
  | 'article___category___children___children'
  | 'article___category___internal___content'
  | 'article___category___internal___contentDigest'
  | 'article___category___internal___description'
  | 'article___category___internal___fieldOwners'
  | 'article___category___internal___ignoreType'
  | 'article___category___internal___mediaType'
  | 'article___category___internal___owner'
  | 'article___category___internal___type'
  | 'article___metaDescription___id'
  | 'article___metaDescription___parent___id'
  | 'article___metaDescription___parent___children'
  | 'article___metaDescription___children'
  | 'article___metaDescription___children___id'
  | 'article___metaDescription___children___children'
  | 'article___metaDescription___internal___content'
  | 'article___metaDescription___internal___contentDigest'
  | 'article___metaDescription___internal___description'
  | 'article___metaDescription___internal___fieldOwners'
  | 'article___metaDescription___internal___ignoreType'
  | 'article___metaDescription___internal___mediaType'
  | 'article___metaDescription___internal___owner'
  | 'article___metaDescription___internal___type'
  | 'article___metaDescription___metaDescription'
  | 'article___metaDescription___sys___type'
  | 'article___spaceId'
  | 'article___createdAt'
  | 'article___updatedAt'
  | 'article___sys___type'
  | 'article___sys___revision'
  | 'article___mustRead'
  | 'article___frequently_asked_questions'
  | 'article___frequently_asked_questions___contentful_id'
  | 'article___frequently_asked_questions___id'
  | 'article___frequently_asked_questions___node_locale'
  | 'article___frequently_asked_questions___question'
  | 'article___frequently_asked_questions___answer___raw'
  | 'article___frequently_asked_questions___fullArticle___contentful_id'
  | 'article___frequently_asked_questions___fullArticle___id'
  | 'article___frequently_asked_questions___fullArticle___node_locale'
  | 'article___frequently_asked_questions___fullArticle___title'
  | 'article___frequently_asked_questions___fullArticle___seoTitle'
  | 'article___frequently_asked_questions___fullArticle___slug'
  | 'article___frequently_asked_questions___fullArticle___spaceId'
  | 'article___frequently_asked_questions___fullArticle___createdAt'
  | 'article___frequently_asked_questions___fullArticle___updatedAt'
  | 'article___frequently_asked_questions___fullArticle___mustRead'
  | 'article___frequently_asked_questions___fullArticle___frequently_asked_questions'
  | 'article___frequently_asked_questions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'article___frequently_asked_questions___fullArticle___children'
  | 'article___frequently_asked_questions___category'
  | 'article___frequently_asked_questions___category___contentful_id'
  | 'article___frequently_asked_questions___category___id'
  | 'article___frequently_asked_questions___category___node_locale'
  | 'article___frequently_asked_questions___category___title'
  | 'article___frequently_asked_questions___category___slug'
  | 'article___frequently_asked_questions___category___frequentlyAskedQuestions'
  | 'article___frequently_asked_questions___category___article'
  | 'article___frequently_asked_questions___category___spaceId'
  | 'article___frequently_asked_questions___category___createdAt'
  | 'article___frequently_asked_questions___category___updatedAt'
  | 'article___frequently_asked_questions___category___definition'
  | 'article___frequently_asked_questions___category___keyTerms'
  | 'article___frequently_asked_questions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'article___frequently_asked_questions___category___children'
  | 'article___frequently_asked_questions___spaceId'
  | 'article___frequently_asked_questions___createdAt'
  | 'article___frequently_asked_questions___updatedAt'
  | 'article___frequently_asked_questions___sys___type'
  | 'article___frequently_asked_questions___sys___revision'
  | 'article___frequently_asked_questions___parent___id'
  | 'article___frequently_asked_questions___parent___children'
  | 'article___frequently_asked_questions___children'
  | 'article___frequently_asked_questions___children___id'
  | 'article___frequently_asked_questions___children___children'
  | 'article___frequently_asked_questions___internal___content'
  | 'article___frequently_asked_questions___internal___contentDigest'
  | 'article___frequently_asked_questions___internal___description'
  | 'article___frequently_asked_questions___internal___fieldOwners'
  | 'article___frequently_asked_questions___internal___ignoreType'
  | 'article___frequently_asked_questions___internal___mediaType'
  | 'article___frequently_asked_questions___internal___owner'
  | 'article___frequently_asked_questions___internal___type'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___parent___id'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___parent___children'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___children___id'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___children___children'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___content'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___contentDigest'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___description'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___fieldOwners'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___ignoreType'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___mediaType'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___owner'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___internal___type'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'article___childrenContentfulArticleMetaDescriptionTextNode___sys___type'
  | 'article___childContentfulArticleMetaDescriptionTextNode___id'
  | 'article___childContentfulArticleMetaDescriptionTextNode___parent___id'
  | 'article___childContentfulArticleMetaDescriptionTextNode___parent___children'
  | 'article___childContentfulArticleMetaDescriptionTextNode___children'
  | 'article___childContentfulArticleMetaDescriptionTextNode___children___id'
  | 'article___childContentfulArticleMetaDescriptionTextNode___children___children'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___content'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___contentDigest'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___description'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___fieldOwners'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___ignoreType'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___mediaType'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___owner'
  | 'article___childContentfulArticleMetaDescriptionTextNode___internal___type'
  | 'article___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'article___childContentfulArticleMetaDescriptionTextNode___sys___type'
  | 'article___parent___id'
  | 'article___parent___parent___id'
  | 'article___parent___parent___children'
  | 'article___parent___children'
  | 'article___parent___children___id'
  | 'article___parent___children___children'
  | 'article___parent___internal___content'
  | 'article___parent___internal___contentDigest'
  | 'article___parent___internal___description'
  | 'article___parent___internal___fieldOwners'
  | 'article___parent___internal___ignoreType'
  | 'article___parent___internal___mediaType'
  | 'article___parent___internal___owner'
  | 'article___parent___internal___type'
  | 'article___children'
  | 'article___children___id'
  | 'article___children___parent___id'
  | 'article___children___parent___children'
  | 'article___children___children'
  | 'article___children___children___id'
  | 'article___children___children___children'
  | 'article___children___internal___content'
  | 'article___children___internal___contentDigest'
  | 'article___children___internal___description'
  | 'article___children___internal___fieldOwners'
  | 'article___children___internal___ignoreType'
  | 'article___children___internal___mediaType'
  | 'article___children___internal___owner'
  | 'article___children___internal___type'
  | 'article___internal___content'
  | 'article___internal___contentDigest'
  | 'article___internal___description'
  | 'article___internal___fieldOwners'
  | 'article___internal___ignoreType'
  | 'article___internal___mediaType'
  | 'article___internal___owner'
  | 'article___internal___type'
  | 'pageDescription___id'
  | 'pageDescription___parent___id'
  | 'pageDescription___parent___parent___id'
  | 'pageDescription___parent___parent___children'
  | 'pageDescription___parent___children'
  | 'pageDescription___parent___children___id'
  | 'pageDescription___parent___children___children'
  | 'pageDescription___parent___internal___content'
  | 'pageDescription___parent___internal___contentDigest'
  | 'pageDescription___parent___internal___description'
  | 'pageDescription___parent___internal___fieldOwners'
  | 'pageDescription___parent___internal___ignoreType'
  | 'pageDescription___parent___internal___mediaType'
  | 'pageDescription___parent___internal___owner'
  | 'pageDescription___parent___internal___type'
  | 'pageDescription___children'
  | 'pageDescription___children___id'
  | 'pageDescription___children___parent___id'
  | 'pageDescription___children___parent___children'
  | 'pageDescription___children___children'
  | 'pageDescription___children___children___id'
  | 'pageDescription___children___children___children'
  | 'pageDescription___children___internal___content'
  | 'pageDescription___children___internal___contentDigest'
  | 'pageDescription___children___internal___description'
  | 'pageDescription___children___internal___fieldOwners'
  | 'pageDescription___children___internal___ignoreType'
  | 'pageDescription___children___internal___mediaType'
  | 'pageDescription___children___internal___owner'
  | 'pageDescription___children___internal___type'
  | 'pageDescription___internal___content'
  | 'pageDescription___internal___contentDigest'
  | 'pageDescription___internal___description'
  | 'pageDescription___internal___fieldOwners'
  | 'pageDescription___internal___ignoreType'
  | 'pageDescription___internal___mediaType'
  | 'pageDescription___internal___owner'
  | 'pageDescription___internal___type'
  | 'pageDescription___pageDescription'
  | 'pageDescription___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'definition'
  | 'definition___contentful_id'
  | 'definition___id'
  | 'definition___node_locale'
  | 'definition___title'
  | 'definition___mainText___raw'
  | 'definition___secondaryText___raw'
  | 'definition___seoTitle'
  | 'definition___slug'
  | 'definition___category___contentful_id'
  | 'definition___category___id'
  | 'definition___category___node_locale'
  | 'definition___category___title'
  | 'definition___category___slug'
  | 'definition___category___frequentlyAskedQuestions'
  | 'definition___category___frequentlyAskedQuestions___contentful_id'
  | 'definition___category___frequentlyAskedQuestions___id'
  | 'definition___category___frequentlyAskedQuestions___node_locale'
  | 'definition___category___frequentlyAskedQuestions___question'
  | 'definition___category___frequentlyAskedQuestions___category'
  | 'definition___category___frequentlyAskedQuestions___spaceId'
  | 'definition___category___frequentlyAskedQuestions___createdAt'
  | 'definition___category___frequentlyAskedQuestions___updatedAt'
  | 'definition___category___frequentlyAskedQuestions___children'
  | 'definition___category___article'
  | 'definition___category___article___contentful_id'
  | 'definition___category___article___id'
  | 'definition___category___article___node_locale'
  | 'definition___category___article___title'
  | 'definition___category___article___seoTitle'
  | 'definition___category___article___slug'
  | 'definition___category___article___spaceId'
  | 'definition___category___article___createdAt'
  | 'definition___category___article___updatedAt'
  | 'definition___category___article___mustRead'
  | 'definition___category___article___frequently_asked_questions'
  | 'definition___category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'definition___category___article___children'
  | 'definition___category___pageDescription___id'
  | 'definition___category___pageDescription___children'
  | 'definition___category___pageDescription___pageDescription'
  | 'definition___category___spaceId'
  | 'definition___category___createdAt'
  | 'definition___category___updatedAt'
  | 'definition___category___sys___type'
  | 'definition___category___sys___revision'
  | 'definition___category___definition'
  | 'definition___category___definition___contentful_id'
  | 'definition___category___definition___id'
  | 'definition___category___definition___node_locale'
  | 'definition___category___definition___title'
  | 'definition___category___definition___seoTitle'
  | 'definition___category___definition___slug'
  | 'definition___category___definition___spaceId'
  | 'definition___category___definition___createdAt'
  | 'definition___category___definition___updatedAt'
  | 'definition___category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'definition___category___definition___children'
  | 'definition___category___keyTerms'
  | 'definition___category___keyTerms___contentful_id'
  | 'definition___category___keyTerms___id'
  | 'definition___category___keyTerms___node_locale'
  | 'definition___category___keyTerms___title'
  | 'definition___category___keyTerms___seoTitle'
  | 'definition___category___keyTerms___slug'
  | 'definition___category___keyTerms___spaceId'
  | 'definition___category___keyTerms___createdAt'
  | 'definition___category___keyTerms___updatedAt'
  | 'definition___category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'definition___category___keyTerms___children'
  | 'definition___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'definition___category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'definition___category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'definition___category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'definition___category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'definition___category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'definition___category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'definition___category___parent___id'
  | 'definition___category___parent___children'
  | 'definition___category___children'
  | 'definition___category___children___id'
  | 'definition___category___children___children'
  | 'definition___category___internal___content'
  | 'definition___category___internal___contentDigest'
  | 'definition___category___internal___description'
  | 'definition___category___internal___fieldOwners'
  | 'definition___category___internal___ignoreType'
  | 'definition___category___internal___mediaType'
  | 'definition___category___internal___owner'
  | 'definition___category___internal___type'
  | 'definition___metaDescription___id'
  | 'definition___metaDescription___parent___id'
  | 'definition___metaDescription___parent___children'
  | 'definition___metaDescription___children'
  | 'definition___metaDescription___children___id'
  | 'definition___metaDescription___children___children'
  | 'definition___metaDescription___internal___content'
  | 'definition___metaDescription___internal___contentDigest'
  | 'definition___metaDescription___internal___description'
  | 'definition___metaDescription___internal___fieldOwners'
  | 'definition___metaDescription___internal___ignoreType'
  | 'definition___metaDescription___internal___mediaType'
  | 'definition___metaDescription___internal___owner'
  | 'definition___metaDescription___internal___type'
  | 'definition___metaDescription___metaDescription'
  | 'definition___metaDescription___sys___type'
  | 'definition___spaceId'
  | 'definition___createdAt'
  | 'definition___updatedAt'
  | 'definition___sys___type'
  | 'definition___sys___revision'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___parent___id'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___parent___children'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___children___id'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___children___children'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___content'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___contentDigest'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___description'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___fieldOwners'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___ignoreType'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___mediaType'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___owner'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___internal___type'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'definition___childrenContentfulDefinitionMetaDescriptionTextNode___sys___type'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___parent___id'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___parent___children'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___children___id'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___children___children'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___content'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___contentDigest'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___description'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___fieldOwners'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___ignoreType'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___mediaType'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___owner'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___internal___type'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'definition___childContentfulDefinitionMetaDescriptionTextNode___sys___type'
  | 'definition___parent___id'
  | 'definition___parent___parent___id'
  | 'definition___parent___parent___children'
  | 'definition___parent___children'
  | 'definition___parent___children___id'
  | 'definition___parent___children___children'
  | 'definition___parent___internal___content'
  | 'definition___parent___internal___contentDigest'
  | 'definition___parent___internal___description'
  | 'definition___parent___internal___fieldOwners'
  | 'definition___parent___internal___ignoreType'
  | 'definition___parent___internal___mediaType'
  | 'definition___parent___internal___owner'
  | 'definition___parent___internal___type'
  | 'definition___children'
  | 'definition___children___id'
  | 'definition___children___parent___id'
  | 'definition___children___parent___children'
  | 'definition___children___children'
  | 'definition___children___children___id'
  | 'definition___children___children___children'
  | 'definition___children___internal___content'
  | 'definition___children___internal___contentDigest'
  | 'definition___children___internal___description'
  | 'definition___children___internal___fieldOwners'
  | 'definition___children___internal___ignoreType'
  | 'definition___children___internal___mediaType'
  | 'definition___children___internal___owner'
  | 'definition___children___internal___type'
  | 'definition___internal___content'
  | 'definition___internal___contentDigest'
  | 'definition___internal___description'
  | 'definition___internal___fieldOwners'
  | 'definition___internal___ignoreType'
  | 'definition___internal___mediaType'
  | 'definition___internal___owner'
  | 'definition___internal___type'
  | 'keyTerms'
  | 'keyTerms___contentful_id'
  | 'keyTerms___id'
  | 'keyTerms___node_locale'
  | 'keyTerms___title'
  | 'keyTerms___mainText___raw'
  | 'keyTerms___secondaryText___raw'
  | 'keyTerms___seoTitle'
  | 'keyTerms___slug'
  | 'keyTerms___category___contentful_id'
  | 'keyTerms___category___id'
  | 'keyTerms___category___node_locale'
  | 'keyTerms___category___title'
  | 'keyTerms___category___slug'
  | 'keyTerms___category___frequentlyAskedQuestions'
  | 'keyTerms___category___frequentlyAskedQuestions___contentful_id'
  | 'keyTerms___category___frequentlyAskedQuestions___id'
  | 'keyTerms___category___frequentlyAskedQuestions___node_locale'
  | 'keyTerms___category___frequentlyAskedQuestions___question'
  | 'keyTerms___category___frequentlyAskedQuestions___category'
  | 'keyTerms___category___frequentlyAskedQuestions___spaceId'
  | 'keyTerms___category___frequentlyAskedQuestions___createdAt'
  | 'keyTerms___category___frequentlyAskedQuestions___updatedAt'
  | 'keyTerms___category___frequentlyAskedQuestions___children'
  | 'keyTerms___category___article'
  | 'keyTerms___category___article___contentful_id'
  | 'keyTerms___category___article___id'
  | 'keyTerms___category___article___node_locale'
  | 'keyTerms___category___article___title'
  | 'keyTerms___category___article___seoTitle'
  | 'keyTerms___category___article___slug'
  | 'keyTerms___category___article___spaceId'
  | 'keyTerms___category___article___createdAt'
  | 'keyTerms___category___article___updatedAt'
  | 'keyTerms___category___article___mustRead'
  | 'keyTerms___category___article___frequently_asked_questions'
  | 'keyTerms___category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'keyTerms___category___article___children'
  | 'keyTerms___category___pageDescription___id'
  | 'keyTerms___category___pageDescription___children'
  | 'keyTerms___category___pageDescription___pageDescription'
  | 'keyTerms___category___spaceId'
  | 'keyTerms___category___createdAt'
  | 'keyTerms___category___updatedAt'
  | 'keyTerms___category___sys___type'
  | 'keyTerms___category___sys___revision'
  | 'keyTerms___category___definition'
  | 'keyTerms___category___definition___contentful_id'
  | 'keyTerms___category___definition___id'
  | 'keyTerms___category___definition___node_locale'
  | 'keyTerms___category___definition___title'
  | 'keyTerms___category___definition___seoTitle'
  | 'keyTerms___category___definition___slug'
  | 'keyTerms___category___definition___spaceId'
  | 'keyTerms___category___definition___createdAt'
  | 'keyTerms___category___definition___updatedAt'
  | 'keyTerms___category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'keyTerms___category___definition___children'
  | 'keyTerms___category___keyTerms'
  | 'keyTerms___category___keyTerms___contentful_id'
  | 'keyTerms___category___keyTerms___id'
  | 'keyTerms___category___keyTerms___node_locale'
  | 'keyTerms___category___keyTerms___title'
  | 'keyTerms___category___keyTerms___seoTitle'
  | 'keyTerms___category___keyTerms___slug'
  | 'keyTerms___category___keyTerms___spaceId'
  | 'keyTerms___category___keyTerms___createdAt'
  | 'keyTerms___category___keyTerms___updatedAt'
  | 'keyTerms___category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'keyTerms___category___keyTerms___children'
  | 'keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'keyTerms___category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'keyTerms___category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'keyTerms___category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'keyTerms___category___parent___id'
  | 'keyTerms___category___parent___children'
  | 'keyTerms___category___children'
  | 'keyTerms___category___children___id'
  | 'keyTerms___category___children___children'
  | 'keyTerms___category___internal___content'
  | 'keyTerms___category___internal___contentDigest'
  | 'keyTerms___category___internal___description'
  | 'keyTerms___category___internal___fieldOwners'
  | 'keyTerms___category___internal___ignoreType'
  | 'keyTerms___category___internal___mediaType'
  | 'keyTerms___category___internal___owner'
  | 'keyTerms___category___internal___type'
  | 'keyTerms___metaDescription___id'
  | 'keyTerms___metaDescription___parent___id'
  | 'keyTerms___metaDescription___parent___children'
  | 'keyTerms___metaDescription___children'
  | 'keyTerms___metaDescription___children___id'
  | 'keyTerms___metaDescription___children___children'
  | 'keyTerms___metaDescription___internal___content'
  | 'keyTerms___metaDescription___internal___contentDigest'
  | 'keyTerms___metaDescription___internal___description'
  | 'keyTerms___metaDescription___internal___fieldOwners'
  | 'keyTerms___metaDescription___internal___ignoreType'
  | 'keyTerms___metaDescription___internal___mediaType'
  | 'keyTerms___metaDescription___internal___owner'
  | 'keyTerms___metaDescription___internal___type'
  | 'keyTerms___metaDescription___metaDescription'
  | 'keyTerms___metaDescription___sys___type'
  | 'keyTerms___spaceId'
  | 'keyTerms___createdAt'
  | 'keyTerms___updatedAt'
  | 'keyTerms___sys___type'
  | 'keyTerms___sys___revision'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___parent___id'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___parent___children'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___children___id'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___children___children'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___content'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___contentDigest'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___description'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___fieldOwners'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___ignoreType'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___mediaType'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___owner'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___internal___type'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___sys___type'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___parent___id'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___parent___children'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___children___id'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___children___children'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___content'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___contentDigest'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___description'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___fieldOwners'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___ignoreType'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___mediaType'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___owner'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___internal___type'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'keyTerms___childContentfulDefinitionMetaDescriptionTextNode___sys___type'
  | 'keyTerms___parent___id'
  | 'keyTerms___parent___parent___id'
  | 'keyTerms___parent___parent___children'
  | 'keyTerms___parent___children'
  | 'keyTerms___parent___children___id'
  | 'keyTerms___parent___children___children'
  | 'keyTerms___parent___internal___content'
  | 'keyTerms___parent___internal___contentDigest'
  | 'keyTerms___parent___internal___description'
  | 'keyTerms___parent___internal___fieldOwners'
  | 'keyTerms___parent___internal___ignoreType'
  | 'keyTerms___parent___internal___mediaType'
  | 'keyTerms___parent___internal___owner'
  | 'keyTerms___parent___internal___type'
  | 'keyTerms___children'
  | 'keyTerms___children___id'
  | 'keyTerms___children___parent___id'
  | 'keyTerms___children___parent___children'
  | 'keyTerms___children___children'
  | 'keyTerms___children___children___id'
  | 'keyTerms___children___children___children'
  | 'keyTerms___children___internal___content'
  | 'keyTerms___children___internal___contentDigest'
  | 'keyTerms___children___internal___description'
  | 'keyTerms___children___internal___fieldOwners'
  | 'keyTerms___children___internal___ignoreType'
  | 'keyTerms___children___internal___mediaType'
  | 'keyTerms___children___internal___owner'
  | 'keyTerms___children___internal___type'
  | 'keyTerms___internal___content'
  | 'keyTerms___internal___contentDigest'
  | 'keyTerms___internal___description'
  | 'keyTerms___internal___fieldOwners'
  | 'keyTerms___internal___ignoreType'
  | 'keyTerms___internal___mediaType'
  | 'keyTerms___internal___owner'
  | 'keyTerms___internal___type'
  | 'childrenContentfulCategoryPageDescriptionTextNode'
  | 'childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___children___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___children___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulCategoryPageDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___parent___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___parent___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___children___id'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___children___children'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___content'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___description'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulCategoryPageDescriptionTextNode___children___internal___type'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'childrenContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'childrenContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'childContentfulCategoryPageDescriptionTextNode___id'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___parent___id'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___parent___children'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___children___id'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___children___children'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___content'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___description'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___owner'
  | 'childContentfulCategoryPageDescriptionTextNode___parent___internal___type'
  | 'childContentfulCategoryPageDescriptionTextNode___children'
  | 'childContentfulCategoryPageDescriptionTextNode___children___id'
  | 'childContentfulCategoryPageDescriptionTextNode___children___parent___id'
  | 'childContentfulCategoryPageDescriptionTextNode___children___parent___children'
  | 'childContentfulCategoryPageDescriptionTextNode___children___children'
  | 'childContentfulCategoryPageDescriptionTextNode___children___children___id'
  | 'childContentfulCategoryPageDescriptionTextNode___children___children___children'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___content'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___description'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___owner'
  | 'childContentfulCategoryPageDescriptionTextNode___children___internal___type'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'childContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'childContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryGroupConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionMaxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionMinArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionSumArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDefinitionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDefinitionEdge>;
  nodes: Array<ContentfulDefinition>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulDefinitionGroupConnection>;
};


export type ContentfulDefinitionConnectionDistinctArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionConnectionMaxArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionConnectionMinArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionConnectionSumArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulDefinitionFieldsEnum;
};

export type ContentfulDefinitionEdge = {
  next?: Maybe<ContentfulDefinition>;
  node: ContentfulDefinition;
  previous?: Maybe<ContentfulDefinition>;
};

export type ContentfulDefinitionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'mainText___raw'
  | 'secondaryText___raw'
  | 'seoTitle'
  | 'slug'
  | 'category___contentful_id'
  | 'category___id'
  | 'category___node_locale'
  | 'category___title'
  | 'category___slug'
  | 'category___frequentlyAskedQuestions'
  | 'category___frequentlyAskedQuestions___contentful_id'
  | 'category___frequentlyAskedQuestions___id'
  | 'category___frequentlyAskedQuestions___node_locale'
  | 'category___frequentlyAskedQuestions___question'
  | 'category___frequentlyAskedQuestions___answer___raw'
  | 'category___frequentlyAskedQuestions___fullArticle___contentful_id'
  | 'category___frequentlyAskedQuestions___fullArticle___id'
  | 'category___frequentlyAskedQuestions___fullArticle___node_locale'
  | 'category___frequentlyAskedQuestions___fullArticle___title'
  | 'category___frequentlyAskedQuestions___fullArticle___seoTitle'
  | 'category___frequentlyAskedQuestions___fullArticle___slug'
  | 'category___frequentlyAskedQuestions___fullArticle___spaceId'
  | 'category___frequentlyAskedQuestions___fullArticle___createdAt'
  | 'category___frequentlyAskedQuestions___fullArticle___updatedAt'
  | 'category___frequentlyAskedQuestions___fullArticle___mustRead'
  | 'category___frequentlyAskedQuestions___fullArticle___frequently_asked_questions'
  | 'category___frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'category___frequentlyAskedQuestions___fullArticle___children'
  | 'category___frequentlyAskedQuestions___category'
  | 'category___frequentlyAskedQuestions___category___contentful_id'
  | 'category___frequentlyAskedQuestions___category___id'
  | 'category___frequentlyAskedQuestions___category___node_locale'
  | 'category___frequentlyAskedQuestions___category___title'
  | 'category___frequentlyAskedQuestions___category___slug'
  | 'category___frequentlyAskedQuestions___category___frequentlyAskedQuestions'
  | 'category___frequentlyAskedQuestions___category___article'
  | 'category___frequentlyAskedQuestions___category___spaceId'
  | 'category___frequentlyAskedQuestions___category___createdAt'
  | 'category___frequentlyAskedQuestions___category___updatedAt'
  | 'category___frequentlyAskedQuestions___category___definition'
  | 'category___frequentlyAskedQuestions___category___keyTerms'
  | 'category___frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___frequentlyAskedQuestions___category___children'
  | 'category___frequentlyAskedQuestions___spaceId'
  | 'category___frequentlyAskedQuestions___createdAt'
  | 'category___frequentlyAskedQuestions___updatedAt'
  | 'category___frequentlyAskedQuestions___sys___type'
  | 'category___frequentlyAskedQuestions___sys___revision'
  | 'category___frequentlyAskedQuestions___parent___id'
  | 'category___frequentlyAskedQuestions___parent___children'
  | 'category___frequentlyAskedQuestions___children'
  | 'category___frequentlyAskedQuestions___children___id'
  | 'category___frequentlyAskedQuestions___children___children'
  | 'category___frequentlyAskedQuestions___internal___content'
  | 'category___frequentlyAskedQuestions___internal___contentDigest'
  | 'category___frequentlyAskedQuestions___internal___description'
  | 'category___frequentlyAskedQuestions___internal___fieldOwners'
  | 'category___frequentlyAskedQuestions___internal___ignoreType'
  | 'category___frequentlyAskedQuestions___internal___mediaType'
  | 'category___frequentlyAskedQuestions___internal___owner'
  | 'category___frequentlyAskedQuestions___internal___type'
  | 'category___article'
  | 'category___article___contentful_id'
  | 'category___article___id'
  | 'category___article___node_locale'
  | 'category___article___title'
  | 'category___article___body___raw'
  | 'category___article___seoTitle'
  | 'category___article___slug'
  | 'category___article___mainImage___contentful_id'
  | 'category___article___mainImage___id'
  | 'category___article___mainImage___gatsbyImageData'
  | 'category___article___mainImage___spaceId'
  | 'category___article___mainImage___createdAt'
  | 'category___article___mainImage___updatedAt'
  | 'category___article___mainImage___title'
  | 'category___article___mainImage___description'
  | 'category___article___mainImage___node_locale'
  | 'category___article___mainImage___url'
  | 'category___article___mainImage___placeholderUrl'
  | 'category___article___mainImage___mimeType'
  | 'category___article___mainImage___filename'
  | 'category___article___mainImage___width'
  | 'category___article___mainImage___height'
  | 'category___article___mainImage___size'
  | 'category___article___mainImage___children'
  | 'category___article___mainImage___filesize'
  | 'category___article___mainImage___publicUrl'
  | 'category___article___mainImage___gatsbyImage'
  | 'category___article___category___contentful_id'
  | 'category___article___category___id'
  | 'category___article___category___node_locale'
  | 'category___article___category___title'
  | 'category___article___category___slug'
  | 'category___article___category___frequentlyAskedQuestions'
  | 'category___article___category___article'
  | 'category___article___category___spaceId'
  | 'category___article___category___createdAt'
  | 'category___article___category___updatedAt'
  | 'category___article___category___definition'
  | 'category___article___category___keyTerms'
  | 'category___article___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___article___category___children'
  | 'category___article___metaDescription___id'
  | 'category___article___metaDescription___children'
  | 'category___article___metaDescription___metaDescription'
  | 'category___article___spaceId'
  | 'category___article___createdAt'
  | 'category___article___updatedAt'
  | 'category___article___sys___type'
  | 'category___article___sys___revision'
  | 'category___article___mustRead'
  | 'category___article___frequently_asked_questions'
  | 'category___article___frequently_asked_questions___contentful_id'
  | 'category___article___frequently_asked_questions___id'
  | 'category___article___frequently_asked_questions___node_locale'
  | 'category___article___frequently_asked_questions___question'
  | 'category___article___frequently_asked_questions___category'
  | 'category___article___frequently_asked_questions___spaceId'
  | 'category___article___frequently_asked_questions___createdAt'
  | 'category___article___frequently_asked_questions___updatedAt'
  | 'category___article___frequently_asked_questions___children'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___id'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___children'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'category___article___parent___id'
  | 'category___article___parent___children'
  | 'category___article___children'
  | 'category___article___children___id'
  | 'category___article___children___children'
  | 'category___article___internal___content'
  | 'category___article___internal___contentDigest'
  | 'category___article___internal___description'
  | 'category___article___internal___fieldOwners'
  | 'category___article___internal___ignoreType'
  | 'category___article___internal___mediaType'
  | 'category___article___internal___owner'
  | 'category___article___internal___type'
  | 'category___pageDescription___id'
  | 'category___pageDescription___parent___id'
  | 'category___pageDescription___parent___children'
  | 'category___pageDescription___children'
  | 'category___pageDescription___children___id'
  | 'category___pageDescription___children___children'
  | 'category___pageDescription___internal___content'
  | 'category___pageDescription___internal___contentDigest'
  | 'category___pageDescription___internal___description'
  | 'category___pageDescription___internal___fieldOwners'
  | 'category___pageDescription___internal___ignoreType'
  | 'category___pageDescription___internal___mediaType'
  | 'category___pageDescription___internal___owner'
  | 'category___pageDescription___internal___type'
  | 'category___pageDescription___pageDescription'
  | 'category___pageDescription___sys___type'
  | 'category___spaceId'
  | 'category___createdAt'
  | 'category___updatedAt'
  | 'category___sys___type'
  | 'category___sys___revision'
  | 'category___definition'
  | 'category___definition___contentful_id'
  | 'category___definition___id'
  | 'category___definition___node_locale'
  | 'category___definition___title'
  | 'category___definition___mainText___raw'
  | 'category___definition___secondaryText___raw'
  | 'category___definition___seoTitle'
  | 'category___definition___slug'
  | 'category___definition___category___contentful_id'
  | 'category___definition___category___id'
  | 'category___definition___category___node_locale'
  | 'category___definition___category___title'
  | 'category___definition___category___slug'
  | 'category___definition___category___frequentlyAskedQuestions'
  | 'category___definition___category___article'
  | 'category___definition___category___spaceId'
  | 'category___definition___category___createdAt'
  | 'category___definition___category___updatedAt'
  | 'category___definition___category___definition'
  | 'category___definition___category___keyTerms'
  | 'category___definition___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___definition___category___children'
  | 'category___definition___metaDescription___id'
  | 'category___definition___metaDescription___children'
  | 'category___definition___metaDescription___metaDescription'
  | 'category___definition___spaceId'
  | 'category___definition___createdAt'
  | 'category___definition___updatedAt'
  | 'category___definition___sys___type'
  | 'category___definition___sys___revision'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___definition___parent___id'
  | 'category___definition___parent___children'
  | 'category___definition___children'
  | 'category___definition___children___id'
  | 'category___definition___children___children'
  | 'category___definition___internal___content'
  | 'category___definition___internal___contentDigest'
  | 'category___definition___internal___description'
  | 'category___definition___internal___fieldOwners'
  | 'category___definition___internal___ignoreType'
  | 'category___definition___internal___mediaType'
  | 'category___definition___internal___owner'
  | 'category___definition___internal___type'
  | 'category___keyTerms'
  | 'category___keyTerms___contentful_id'
  | 'category___keyTerms___id'
  | 'category___keyTerms___node_locale'
  | 'category___keyTerms___title'
  | 'category___keyTerms___mainText___raw'
  | 'category___keyTerms___secondaryText___raw'
  | 'category___keyTerms___seoTitle'
  | 'category___keyTerms___slug'
  | 'category___keyTerms___category___contentful_id'
  | 'category___keyTerms___category___id'
  | 'category___keyTerms___category___node_locale'
  | 'category___keyTerms___category___title'
  | 'category___keyTerms___category___slug'
  | 'category___keyTerms___category___frequentlyAskedQuestions'
  | 'category___keyTerms___category___article'
  | 'category___keyTerms___category___spaceId'
  | 'category___keyTerms___category___createdAt'
  | 'category___keyTerms___category___updatedAt'
  | 'category___keyTerms___category___definition'
  | 'category___keyTerms___category___keyTerms'
  | 'category___keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___keyTerms___category___children'
  | 'category___keyTerms___metaDescription___id'
  | 'category___keyTerms___metaDescription___children'
  | 'category___keyTerms___metaDescription___metaDescription'
  | 'category___keyTerms___spaceId'
  | 'category___keyTerms___createdAt'
  | 'category___keyTerms___updatedAt'
  | 'category___keyTerms___sys___type'
  | 'category___keyTerms___sys___revision'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___keyTerms___parent___id'
  | 'category___keyTerms___parent___children'
  | 'category___keyTerms___children'
  | 'category___keyTerms___children___id'
  | 'category___keyTerms___children___children'
  | 'category___keyTerms___internal___content'
  | 'category___keyTerms___internal___contentDigest'
  | 'category___keyTerms___internal___description'
  | 'category___keyTerms___internal___fieldOwners'
  | 'category___keyTerms___internal___ignoreType'
  | 'category___keyTerms___internal___mediaType'
  | 'category___keyTerms___internal___owner'
  | 'category___keyTerms___internal___type'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'category___childContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'metaDescription___id'
  | 'metaDescription___parent___id'
  | 'metaDescription___parent___parent___id'
  | 'metaDescription___parent___parent___children'
  | 'metaDescription___parent___children'
  | 'metaDescription___parent___children___id'
  | 'metaDescription___parent___children___children'
  | 'metaDescription___parent___internal___content'
  | 'metaDescription___parent___internal___contentDigest'
  | 'metaDescription___parent___internal___description'
  | 'metaDescription___parent___internal___fieldOwners'
  | 'metaDescription___parent___internal___ignoreType'
  | 'metaDescription___parent___internal___mediaType'
  | 'metaDescription___parent___internal___owner'
  | 'metaDescription___parent___internal___type'
  | 'metaDescription___children'
  | 'metaDescription___children___id'
  | 'metaDescription___children___parent___id'
  | 'metaDescription___children___parent___children'
  | 'metaDescription___children___children'
  | 'metaDescription___children___children___id'
  | 'metaDescription___children___children___children'
  | 'metaDescription___children___internal___content'
  | 'metaDescription___children___internal___contentDigest'
  | 'metaDescription___children___internal___description'
  | 'metaDescription___children___internal___fieldOwners'
  | 'metaDescription___children___internal___ignoreType'
  | 'metaDescription___children___internal___mediaType'
  | 'metaDescription___children___internal___owner'
  | 'metaDescription___children___internal___type'
  | 'metaDescription___internal___content'
  | 'metaDescription___internal___contentDigest'
  | 'metaDescription___internal___description'
  | 'metaDescription___internal___fieldOwners'
  | 'metaDescription___internal___ignoreType'
  | 'metaDescription___internal___mediaType'
  | 'metaDescription___internal___owner'
  | 'metaDescription___internal___type'
  | 'metaDescription___metaDescription'
  | 'metaDescription___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___parent___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___parent___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___children___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___children___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___content'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___contentDigest'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___description'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___ignoreType'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___mediaType'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___owner'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___parent___internal___type'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___parent___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___parent___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___children___id'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___children___children'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___content'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___contentDigest'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___description'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___fieldOwners'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___ignoreType'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___mediaType'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___owner'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___children___internal___type'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___content'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___contentDigest'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___description'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___fieldOwners'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___ignoreType'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___mediaType'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___owner'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___internal___type'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'childrenContentfulDefinitionMetaDescriptionTextNode___sys___type'
  | 'childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___parent___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___parent___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___children___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___children___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___content'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___description'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___owner'
  | 'childContentfulDefinitionMetaDescriptionTextNode___parent___internal___type'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___parent___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___parent___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___children___id'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___children___children'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___content'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___description'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___owner'
  | 'childContentfulDefinitionMetaDescriptionTextNode___children___internal___type'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___content'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___contentDigest'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___description'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___ignoreType'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___mediaType'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___owner'
  | 'childContentfulDefinitionMetaDescriptionTextNode___internal___type'
  | 'childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'childContentfulDefinitionMetaDescriptionTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulDefinitionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDefinitionEdge>;
  nodes: Array<ContentfulDefinition>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulDefinitionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulDefinitionGroupConnectionDistinctArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionGroupConnectionMaxArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionGroupConnectionMinArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionGroupConnectionSumArgs = {
  field: ContentfulDefinitionFieldsEnum;
};


export type ContentfulDefinitionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulDefinitionFieldsEnum;
};

export type ContentfulDefinitionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulDefinitionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulLeadMagnetTextTextNodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeadMagnetTextTextNodeSysFilterInput>;
};

export type ContentfulLeadMagnetTextTextNodeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLeadMagnetSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  revision?: InputMaybe<IntQueryOperatorInput>;
  contentType?: InputMaybe<ContentfulLeadMagnetSysContentTypeFilterInput>;
};

export type ContentfulLeadMagnetSysContentTypeFilterInput = {
  sys?: InputMaybe<ContentfulLeadMagnetSysContentTypeSysFilterInput>;
};

export type ContentfulLeadMagnetSysContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
  linkType?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulLeadMagnetTextTextNodeFilterListInput = {
  elemMatch?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterInput>;
};

export type ContentfulLeadMagnetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeadMagnetEdge>;
  nodes: Array<ContentfulLeadMagnet>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeadMagnetGroupConnection>;
};


export type ContentfulLeadMagnetConnectionDistinctArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetConnectionMaxArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetConnectionMinArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetConnectionSumArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeadMagnetFieldsEnum;
};

export type ContentfulLeadMagnetEdge = {
  next?: Maybe<ContentfulLeadMagnet>;
  node: ContentfulLeadMagnet;
  previous?: Maybe<ContentfulLeadMagnet>;
};

export type ContentfulLeadMagnetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'type'
  | 'heading'
  | 'contentUpgrade___contentful_id'
  | 'contentUpgrade___id'
  | 'contentUpgrade___gatsbyImageData'
  | 'contentUpgrade___spaceId'
  | 'contentUpgrade___createdAt'
  | 'contentUpgrade___updatedAt'
  | 'contentUpgrade___file___url'
  | 'contentUpgrade___file___details___size'
  | 'contentUpgrade___file___fileName'
  | 'contentUpgrade___file___contentType'
  | 'contentUpgrade___title'
  | 'contentUpgrade___description'
  | 'contentUpgrade___node_locale'
  | 'contentUpgrade___sys___type'
  | 'contentUpgrade___sys___revision'
  | 'contentUpgrade___url'
  | 'contentUpgrade___placeholderUrl'
  | 'contentUpgrade___mimeType'
  | 'contentUpgrade___filename'
  | 'contentUpgrade___width'
  | 'contentUpgrade___height'
  | 'contentUpgrade___size'
  | 'contentUpgrade___parent___id'
  | 'contentUpgrade___parent___parent___id'
  | 'contentUpgrade___parent___parent___children'
  | 'contentUpgrade___parent___children'
  | 'contentUpgrade___parent___children___id'
  | 'contentUpgrade___parent___children___children'
  | 'contentUpgrade___parent___internal___content'
  | 'contentUpgrade___parent___internal___contentDigest'
  | 'contentUpgrade___parent___internal___description'
  | 'contentUpgrade___parent___internal___fieldOwners'
  | 'contentUpgrade___parent___internal___ignoreType'
  | 'contentUpgrade___parent___internal___mediaType'
  | 'contentUpgrade___parent___internal___owner'
  | 'contentUpgrade___parent___internal___type'
  | 'contentUpgrade___children'
  | 'contentUpgrade___children___id'
  | 'contentUpgrade___children___parent___id'
  | 'contentUpgrade___children___parent___children'
  | 'contentUpgrade___children___children'
  | 'contentUpgrade___children___children___id'
  | 'contentUpgrade___children___children___children'
  | 'contentUpgrade___children___internal___content'
  | 'contentUpgrade___children___internal___contentDigest'
  | 'contentUpgrade___children___internal___description'
  | 'contentUpgrade___children___internal___fieldOwners'
  | 'contentUpgrade___children___internal___ignoreType'
  | 'contentUpgrade___children___internal___mediaType'
  | 'contentUpgrade___children___internal___owner'
  | 'contentUpgrade___children___internal___type'
  | 'contentUpgrade___internal___content'
  | 'contentUpgrade___internal___contentDigest'
  | 'contentUpgrade___internal___description'
  | 'contentUpgrade___internal___fieldOwners'
  | 'contentUpgrade___internal___ignoreType'
  | 'contentUpgrade___internal___mediaType'
  | 'contentUpgrade___internal___owner'
  | 'contentUpgrade___internal___type'
  | 'contentUpgrade___filesize'
  | 'contentUpgrade___publicUrl'
  | 'contentUpgrade___resize___width'
  | 'contentUpgrade___resize___height'
  | 'contentUpgrade___resize___src'
  | 'contentUpgrade___gatsbyImage'
  | 'text___id'
  | 'text___parent___id'
  | 'text___parent___parent___id'
  | 'text___parent___parent___children'
  | 'text___parent___children'
  | 'text___parent___children___id'
  | 'text___parent___children___children'
  | 'text___parent___internal___content'
  | 'text___parent___internal___contentDigest'
  | 'text___parent___internal___description'
  | 'text___parent___internal___fieldOwners'
  | 'text___parent___internal___ignoreType'
  | 'text___parent___internal___mediaType'
  | 'text___parent___internal___owner'
  | 'text___parent___internal___type'
  | 'text___children'
  | 'text___children___id'
  | 'text___children___parent___id'
  | 'text___children___parent___children'
  | 'text___children___children'
  | 'text___children___children___id'
  | 'text___children___children___children'
  | 'text___children___internal___content'
  | 'text___children___internal___contentDigest'
  | 'text___children___internal___description'
  | 'text___children___internal___fieldOwners'
  | 'text___children___internal___ignoreType'
  | 'text___children___internal___mediaType'
  | 'text___children___internal___owner'
  | 'text___children___internal___type'
  | 'text___internal___content'
  | 'text___internal___contentDigest'
  | 'text___internal___description'
  | 'text___internal___fieldOwners'
  | 'text___internal___ignoreType'
  | 'text___internal___mediaType'
  | 'text___internal___owner'
  | 'text___internal___type'
  | 'text___text'
  | 'text___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulLeadMagnetTextTextNode'
  | 'childrenContentfulLeadMagnetTextTextNode___id'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___id'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___parent___id'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___parent___children'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___children'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___children___id'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___children___children'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___content'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___contentDigest'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___description'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___ignoreType'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___mediaType'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___owner'
  | 'childrenContentfulLeadMagnetTextTextNode___parent___internal___type'
  | 'childrenContentfulLeadMagnetTextTextNode___children'
  | 'childrenContentfulLeadMagnetTextTextNode___children___id'
  | 'childrenContentfulLeadMagnetTextTextNode___children___parent___id'
  | 'childrenContentfulLeadMagnetTextTextNode___children___parent___children'
  | 'childrenContentfulLeadMagnetTextTextNode___children___children'
  | 'childrenContentfulLeadMagnetTextTextNode___children___children___id'
  | 'childrenContentfulLeadMagnetTextTextNode___children___children___children'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___content'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___contentDigest'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___description'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___fieldOwners'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___ignoreType'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___mediaType'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___owner'
  | 'childrenContentfulLeadMagnetTextTextNode___children___internal___type'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___content'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___contentDigest'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___description'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___fieldOwners'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___ignoreType'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___mediaType'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___owner'
  | 'childrenContentfulLeadMagnetTextTextNode___internal___type'
  | 'childrenContentfulLeadMagnetTextTextNode___text'
  | 'childrenContentfulLeadMagnetTextTextNode___sys___type'
  | 'childContentfulLeadMagnetTextTextNode___id'
  | 'childContentfulLeadMagnetTextTextNode___parent___id'
  | 'childContentfulLeadMagnetTextTextNode___parent___parent___id'
  | 'childContentfulLeadMagnetTextTextNode___parent___parent___children'
  | 'childContentfulLeadMagnetTextTextNode___parent___children'
  | 'childContentfulLeadMagnetTextTextNode___parent___children___id'
  | 'childContentfulLeadMagnetTextTextNode___parent___children___children'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___content'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___contentDigest'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___description'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___fieldOwners'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___ignoreType'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___mediaType'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___owner'
  | 'childContentfulLeadMagnetTextTextNode___parent___internal___type'
  | 'childContentfulLeadMagnetTextTextNode___children'
  | 'childContentfulLeadMagnetTextTextNode___children___id'
  | 'childContentfulLeadMagnetTextTextNode___children___parent___id'
  | 'childContentfulLeadMagnetTextTextNode___children___parent___children'
  | 'childContentfulLeadMagnetTextTextNode___children___children'
  | 'childContentfulLeadMagnetTextTextNode___children___children___id'
  | 'childContentfulLeadMagnetTextTextNode___children___children___children'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___content'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___contentDigest'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___description'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___fieldOwners'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___ignoreType'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___mediaType'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___owner'
  | 'childContentfulLeadMagnetTextTextNode___children___internal___type'
  | 'childContentfulLeadMagnetTextTextNode___internal___content'
  | 'childContentfulLeadMagnetTextTextNode___internal___contentDigest'
  | 'childContentfulLeadMagnetTextTextNode___internal___description'
  | 'childContentfulLeadMagnetTextTextNode___internal___fieldOwners'
  | 'childContentfulLeadMagnetTextTextNode___internal___ignoreType'
  | 'childContentfulLeadMagnetTextTextNode___internal___mediaType'
  | 'childContentfulLeadMagnetTextTextNode___internal___owner'
  | 'childContentfulLeadMagnetTextTextNode___internal___type'
  | 'childContentfulLeadMagnetTextTextNode___text'
  | 'childContentfulLeadMagnetTextTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulLeadMagnetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeadMagnetEdge>;
  nodes: Array<ContentfulLeadMagnet>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeadMagnetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLeadMagnetGroupConnectionDistinctArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetGroupConnectionMaxArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetGroupConnectionMinArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetGroupConnectionSumArgs = {
  field: ContentfulLeadMagnetFieldsEnum;
};


export type ContentfulLeadMagnetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeadMagnetFieldsEnum;
};

export type ContentfulLeadMagnetFilterInput = {
  contentful_id?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  node_locale?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  heading?: InputMaybe<StringQueryOperatorInput>;
  contentUpgrade?: InputMaybe<ContentfulAssetFilterInput>;
  text?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterInput>;
  spaceId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  sys?: InputMaybe<ContentfulLeadMagnetSysFilterInput>;
  childrenContentfulLeadMagnetTextTextNode?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterListInput>;
  childContentfulLeadMagnetTextTextNode?: InputMaybe<ContentfulLeadMagnetTextTextNodeFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentfulLeadMagnetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLeadMagnetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulFrequentlyAskedQuestionsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFrequentlyAskedQuestionsEdge>;
  nodes: Array<ContentfulFrequentlyAskedQuestions>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFrequentlyAskedQuestionsGroupConnection>;
};


export type ContentfulFrequentlyAskedQuestionsConnectionDistinctArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsConnectionMaxArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsConnectionMinArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsConnectionSumArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};

export type ContentfulFrequentlyAskedQuestionsEdge = {
  next?: Maybe<ContentfulFrequentlyAskedQuestions>;
  node: ContentfulFrequentlyAskedQuestions;
  previous?: Maybe<ContentfulFrequentlyAskedQuestions>;
};

export type ContentfulFrequentlyAskedQuestionsFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'question'
  | 'answer___raw'
  | 'fullArticle___contentful_id'
  | 'fullArticle___id'
  | 'fullArticle___node_locale'
  | 'fullArticle___title'
  | 'fullArticle___body___raw'
  | 'fullArticle___seoTitle'
  | 'fullArticle___slug'
  | 'fullArticle___mainImage___contentful_id'
  | 'fullArticle___mainImage___id'
  | 'fullArticle___mainImage___gatsbyImageData'
  | 'fullArticle___mainImage___spaceId'
  | 'fullArticle___mainImage___createdAt'
  | 'fullArticle___mainImage___updatedAt'
  | 'fullArticle___mainImage___file___url'
  | 'fullArticle___mainImage___file___fileName'
  | 'fullArticle___mainImage___file___contentType'
  | 'fullArticle___mainImage___title'
  | 'fullArticle___mainImage___description'
  | 'fullArticle___mainImage___node_locale'
  | 'fullArticle___mainImage___sys___type'
  | 'fullArticle___mainImage___sys___revision'
  | 'fullArticle___mainImage___url'
  | 'fullArticle___mainImage___placeholderUrl'
  | 'fullArticle___mainImage___mimeType'
  | 'fullArticle___mainImage___filename'
  | 'fullArticle___mainImage___width'
  | 'fullArticle___mainImage___height'
  | 'fullArticle___mainImage___size'
  | 'fullArticle___mainImage___parent___id'
  | 'fullArticle___mainImage___parent___children'
  | 'fullArticle___mainImage___children'
  | 'fullArticle___mainImage___children___id'
  | 'fullArticle___mainImage___children___children'
  | 'fullArticle___mainImage___internal___content'
  | 'fullArticle___mainImage___internal___contentDigest'
  | 'fullArticle___mainImage___internal___description'
  | 'fullArticle___mainImage___internal___fieldOwners'
  | 'fullArticle___mainImage___internal___ignoreType'
  | 'fullArticle___mainImage___internal___mediaType'
  | 'fullArticle___mainImage___internal___owner'
  | 'fullArticle___mainImage___internal___type'
  | 'fullArticle___mainImage___filesize'
  | 'fullArticle___mainImage___publicUrl'
  | 'fullArticle___mainImage___resize___width'
  | 'fullArticle___mainImage___resize___height'
  | 'fullArticle___mainImage___resize___src'
  | 'fullArticle___mainImage___gatsbyImage'
  | 'fullArticle___category___contentful_id'
  | 'fullArticle___category___id'
  | 'fullArticle___category___node_locale'
  | 'fullArticle___category___title'
  | 'fullArticle___category___slug'
  | 'fullArticle___category___frequentlyAskedQuestions'
  | 'fullArticle___category___frequentlyAskedQuestions___contentful_id'
  | 'fullArticle___category___frequentlyAskedQuestions___id'
  | 'fullArticle___category___frequentlyAskedQuestions___node_locale'
  | 'fullArticle___category___frequentlyAskedQuestions___question'
  | 'fullArticle___category___frequentlyAskedQuestions___category'
  | 'fullArticle___category___frequentlyAskedQuestions___spaceId'
  | 'fullArticle___category___frequentlyAskedQuestions___createdAt'
  | 'fullArticle___category___frequentlyAskedQuestions___updatedAt'
  | 'fullArticle___category___frequentlyAskedQuestions___children'
  | 'fullArticle___category___article'
  | 'fullArticle___category___article___contentful_id'
  | 'fullArticle___category___article___id'
  | 'fullArticle___category___article___node_locale'
  | 'fullArticle___category___article___title'
  | 'fullArticle___category___article___seoTitle'
  | 'fullArticle___category___article___slug'
  | 'fullArticle___category___article___spaceId'
  | 'fullArticle___category___article___createdAt'
  | 'fullArticle___category___article___updatedAt'
  | 'fullArticle___category___article___mustRead'
  | 'fullArticle___category___article___frequently_asked_questions'
  | 'fullArticle___category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'fullArticle___category___article___children'
  | 'fullArticle___category___pageDescription___id'
  | 'fullArticle___category___pageDescription___children'
  | 'fullArticle___category___pageDescription___pageDescription'
  | 'fullArticle___category___spaceId'
  | 'fullArticle___category___createdAt'
  | 'fullArticle___category___updatedAt'
  | 'fullArticle___category___sys___type'
  | 'fullArticle___category___sys___revision'
  | 'fullArticle___category___definition'
  | 'fullArticle___category___definition___contentful_id'
  | 'fullArticle___category___definition___id'
  | 'fullArticle___category___definition___node_locale'
  | 'fullArticle___category___definition___title'
  | 'fullArticle___category___definition___seoTitle'
  | 'fullArticle___category___definition___slug'
  | 'fullArticle___category___definition___spaceId'
  | 'fullArticle___category___definition___createdAt'
  | 'fullArticle___category___definition___updatedAt'
  | 'fullArticle___category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'fullArticle___category___definition___children'
  | 'fullArticle___category___keyTerms'
  | 'fullArticle___category___keyTerms___contentful_id'
  | 'fullArticle___category___keyTerms___id'
  | 'fullArticle___category___keyTerms___node_locale'
  | 'fullArticle___category___keyTerms___title'
  | 'fullArticle___category___keyTerms___seoTitle'
  | 'fullArticle___category___keyTerms___slug'
  | 'fullArticle___category___keyTerms___spaceId'
  | 'fullArticle___category___keyTerms___createdAt'
  | 'fullArticle___category___keyTerms___updatedAt'
  | 'fullArticle___category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'fullArticle___category___keyTerms___children'
  | 'fullArticle___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'fullArticle___category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'fullArticle___category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'fullArticle___category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'fullArticle___category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'fullArticle___category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'fullArticle___category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'fullArticle___category___parent___id'
  | 'fullArticle___category___parent___children'
  | 'fullArticle___category___children'
  | 'fullArticle___category___children___id'
  | 'fullArticle___category___children___children'
  | 'fullArticle___category___internal___content'
  | 'fullArticle___category___internal___contentDigest'
  | 'fullArticle___category___internal___description'
  | 'fullArticle___category___internal___fieldOwners'
  | 'fullArticle___category___internal___ignoreType'
  | 'fullArticle___category___internal___mediaType'
  | 'fullArticle___category___internal___owner'
  | 'fullArticle___category___internal___type'
  | 'fullArticle___metaDescription___id'
  | 'fullArticle___metaDescription___parent___id'
  | 'fullArticle___metaDescription___parent___children'
  | 'fullArticle___metaDescription___children'
  | 'fullArticle___metaDescription___children___id'
  | 'fullArticle___metaDescription___children___children'
  | 'fullArticle___metaDescription___internal___content'
  | 'fullArticle___metaDescription___internal___contentDigest'
  | 'fullArticle___metaDescription___internal___description'
  | 'fullArticle___metaDescription___internal___fieldOwners'
  | 'fullArticle___metaDescription___internal___ignoreType'
  | 'fullArticle___metaDescription___internal___mediaType'
  | 'fullArticle___metaDescription___internal___owner'
  | 'fullArticle___metaDescription___internal___type'
  | 'fullArticle___metaDescription___metaDescription'
  | 'fullArticle___metaDescription___sys___type'
  | 'fullArticle___spaceId'
  | 'fullArticle___createdAt'
  | 'fullArticle___updatedAt'
  | 'fullArticle___sys___type'
  | 'fullArticle___sys___revision'
  | 'fullArticle___mustRead'
  | 'fullArticle___frequently_asked_questions'
  | 'fullArticle___frequently_asked_questions___contentful_id'
  | 'fullArticle___frequently_asked_questions___id'
  | 'fullArticle___frequently_asked_questions___node_locale'
  | 'fullArticle___frequently_asked_questions___question'
  | 'fullArticle___frequently_asked_questions___answer___raw'
  | 'fullArticle___frequently_asked_questions___fullArticle___contentful_id'
  | 'fullArticle___frequently_asked_questions___fullArticle___id'
  | 'fullArticle___frequently_asked_questions___fullArticle___node_locale'
  | 'fullArticle___frequently_asked_questions___fullArticle___title'
  | 'fullArticle___frequently_asked_questions___fullArticle___seoTitle'
  | 'fullArticle___frequently_asked_questions___fullArticle___slug'
  | 'fullArticle___frequently_asked_questions___fullArticle___spaceId'
  | 'fullArticle___frequently_asked_questions___fullArticle___createdAt'
  | 'fullArticle___frequently_asked_questions___fullArticle___updatedAt'
  | 'fullArticle___frequently_asked_questions___fullArticle___mustRead'
  | 'fullArticle___frequently_asked_questions___fullArticle___frequently_asked_questions'
  | 'fullArticle___frequently_asked_questions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'fullArticle___frequently_asked_questions___fullArticle___children'
  | 'fullArticle___frequently_asked_questions___category'
  | 'fullArticle___frequently_asked_questions___category___contentful_id'
  | 'fullArticle___frequently_asked_questions___category___id'
  | 'fullArticle___frequently_asked_questions___category___node_locale'
  | 'fullArticle___frequently_asked_questions___category___title'
  | 'fullArticle___frequently_asked_questions___category___slug'
  | 'fullArticle___frequently_asked_questions___category___frequentlyAskedQuestions'
  | 'fullArticle___frequently_asked_questions___category___article'
  | 'fullArticle___frequently_asked_questions___category___spaceId'
  | 'fullArticle___frequently_asked_questions___category___createdAt'
  | 'fullArticle___frequently_asked_questions___category___updatedAt'
  | 'fullArticle___frequently_asked_questions___category___definition'
  | 'fullArticle___frequently_asked_questions___category___keyTerms'
  | 'fullArticle___frequently_asked_questions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'fullArticle___frequently_asked_questions___category___children'
  | 'fullArticle___frequently_asked_questions___spaceId'
  | 'fullArticle___frequently_asked_questions___createdAt'
  | 'fullArticle___frequently_asked_questions___updatedAt'
  | 'fullArticle___frequently_asked_questions___sys___type'
  | 'fullArticle___frequently_asked_questions___sys___revision'
  | 'fullArticle___frequently_asked_questions___parent___id'
  | 'fullArticle___frequently_asked_questions___parent___children'
  | 'fullArticle___frequently_asked_questions___children'
  | 'fullArticle___frequently_asked_questions___children___id'
  | 'fullArticle___frequently_asked_questions___children___children'
  | 'fullArticle___frequently_asked_questions___internal___content'
  | 'fullArticle___frequently_asked_questions___internal___contentDigest'
  | 'fullArticle___frequently_asked_questions___internal___description'
  | 'fullArticle___frequently_asked_questions___internal___fieldOwners'
  | 'fullArticle___frequently_asked_questions___internal___ignoreType'
  | 'fullArticle___frequently_asked_questions___internal___mediaType'
  | 'fullArticle___frequently_asked_questions___internal___owner'
  | 'fullArticle___frequently_asked_questions___internal___type'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___parent___id'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___parent___children'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___children___id'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___children___children'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___content'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___contentDigest'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___description'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___fieldOwners'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___ignoreType'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___mediaType'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___owner'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___internal___type'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'fullArticle___childrenContentfulArticleMetaDescriptionTextNode___sys___type'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___id'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___parent___id'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___parent___children'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___children'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___children___id'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___children___children'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___content'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___contentDigest'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___description'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___fieldOwners'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___ignoreType'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___mediaType'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___owner'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___internal___type'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'fullArticle___childContentfulArticleMetaDescriptionTextNode___sys___type'
  | 'fullArticle___parent___id'
  | 'fullArticle___parent___parent___id'
  | 'fullArticle___parent___parent___children'
  | 'fullArticle___parent___children'
  | 'fullArticle___parent___children___id'
  | 'fullArticle___parent___children___children'
  | 'fullArticle___parent___internal___content'
  | 'fullArticle___parent___internal___contentDigest'
  | 'fullArticle___parent___internal___description'
  | 'fullArticle___parent___internal___fieldOwners'
  | 'fullArticle___parent___internal___ignoreType'
  | 'fullArticle___parent___internal___mediaType'
  | 'fullArticle___parent___internal___owner'
  | 'fullArticle___parent___internal___type'
  | 'fullArticle___children'
  | 'fullArticle___children___id'
  | 'fullArticle___children___parent___id'
  | 'fullArticle___children___parent___children'
  | 'fullArticle___children___children'
  | 'fullArticle___children___children___id'
  | 'fullArticle___children___children___children'
  | 'fullArticle___children___internal___content'
  | 'fullArticle___children___internal___contentDigest'
  | 'fullArticle___children___internal___description'
  | 'fullArticle___children___internal___fieldOwners'
  | 'fullArticle___children___internal___ignoreType'
  | 'fullArticle___children___internal___mediaType'
  | 'fullArticle___children___internal___owner'
  | 'fullArticle___children___internal___type'
  | 'fullArticle___internal___content'
  | 'fullArticle___internal___contentDigest'
  | 'fullArticle___internal___description'
  | 'fullArticle___internal___fieldOwners'
  | 'fullArticle___internal___ignoreType'
  | 'fullArticle___internal___mediaType'
  | 'fullArticle___internal___owner'
  | 'fullArticle___internal___type'
  | 'category'
  | 'category___contentful_id'
  | 'category___id'
  | 'category___node_locale'
  | 'category___title'
  | 'category___slug'
  | 'category___frequentlyAskedQuestions'
  | 'category___frequentlyAskedQuestions___contentful_id'
  | 'category___frequentlyAskedQuestions___id'
  | 'category___frequentlyAskedQuestions___node_locale'
  | 'category___frequentlyAskedQuestions___question'
  | 'category___frequentlyAskedQuestions___answer___raw'
  | 'category___frequentlyAskedQuestions___fullArticle___contentful_id'
  | 'category___frequentlyAskedQuestions___fullArticle___id'
  | 'category___frequentlyAskedQuestions___fullArticle___node_locale'
  | 'category___frequentlyAskedQuestions___fullArticle___title'
  | 'category___frequentlyAskedQuestions___fullArticle___seoTitle'
  | 'category___frequentlyAskedQuestions___fullArticle___slug'
  | 'category___frequentlyAskedQuestions___fullArticle___spaceId'
  | 'category___frequentlyAskedQuestions___fullArticle___createdAt'
  | 'category___frequentlyAskedQuestions___fullArticle___updatedAt'
  | 'category___frequentlyAskedQuestions___fullArticle___mustRead'
  | 'category___frequentlyAskedQuestions___fullArticle___frequently_asked_questions'
  | 'category___frequentlyAskedQuestions___fullArticle___childrenContentfulArticleMetaDescriptionTextNode'
  | 'category___frequentlyAskedQuestions___fullArticle___children'
  | 'category___frequentlyAskedQuestions___category'
  | 'category___frequentlyAskedQuestions___category___contentful_id'
  | 'category___frequentlyAskedQuestions___category___id'
  | 'category___frequentlyAskedQuestions___category___node_locale'
  | 'category___frequentlyAskedQuestions___category___title'
  | 'category___frequentlyAskedQuestions___category___slug'
  | 'category___frequentlyAskedQuestions___category___frequentlyAskedQuestions'
  | 'category___frequentlyAskedQuestions___category___article'
  | 'category___frequentlyAskedQuestions___category___spaceId'
  | 'category___frequentlyAskedQuestions___category___createdAt'
  | 'category___frequentlyAskedQuestions___category___updatedAt'
  | 'category___frequentlyAskedQuestions___category___definition'
  | 'category___frequentlyAskedQuestions___category___keyTerms'
  | 'category___frequentlyAskedQuestions___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___frequentlyAskedQuestions___category___children'
  | 'category___frequentlyAskedQuestions___spaceId'
  | 'category___frequentlyAskedQuestions___createdAt'
  | 'category___frequentlyAskedQuestions___updatedAt'
  | 'category___frequentlyAskedQuestions___sys___type'
  | 'category___frequentlyAskedQuestions___sys___revision'
  | 'category___frequentlyAskedQuestions___parent___id'
  | 'category___frequentlyAskedQuestions___parent___children'
  | 'category___frequentlyAskedQuestions___children'
  | 'category___frequentlyAskedQuestions___children___id'
  | 'category___frequentlyAskedQuestions___children___children'
  | 'category___frequentlyAskedQuestions___internal___content'
  | 'category___frequentlyAskedQuestions___internal___contentDigest'
  | 'category___frequentlyAskedQuestions___internal___description'
  | 'category___frequentlyAskedQuestions___internal___fieldOwners'
  | 'category___frequentlyAskedQuestions___internal___ignoreType'
  | 'category___frequentlyAskedQuestions___internal___mediaType'
  | 'category___frequentlyAskedQuestions___internal___owner'
  | 'category___frequentlyAskedQuestions___internal___type'
  | 'category___article'
  | 'category___article___contentful_id'
  | 'category___article___id'
  | 'category___article___node_locale'
  | 'category___article___title'
  | 'category___article___body___raw'
  | 'category___article___seoTitle'
  | 'category___article___slug'
  | 'category___article___mainImage___contentful_id'
  | 'category___article___mainImage___id'
  | 'category___article___mainImage___gatsbyImageData'
  | 'category___article___mainImage___spaceId'
  | 'category___article___mainImage___createdAt'
  | 'category___article___mainImage___updatedAt'
  | 'category___article___mainImage___title'
  | 'category___article___mainImage___description'
  | 'category___article___mainImage___node_locale'
  | 'category___article___mainImage___url'
  | 'category___article___mainImage___placeholderUrl'
  | 'category___article___mainImage___mimeType'
  | 'category___article___mainImage___filename'
  | 'category___article___mainImage___width'
  | 'category___article___mainImage___height'
  | 'category___article___mainImage___size'
  | 'category___article___mainImage___children'
  | 'category___article___mainImage___filesize'
  | 'category___article___mainImage___publicUrl'
  | 'category___article___mainImage___gatsbyImage'
  | 'category___article___category___contentful_id'
  | 'category___article___category___id'
  | 'category___article___category___node_locale'
  | 'category___article___category___title'
  | 'category___article___category___slug'
  | 'category___article___category___frequentlyAskedQuestions'
  | 'category___article___category___article'
  | 'category___article___category___spaceId'
  | 'category___article___category___createdAt'
  | 'category___article___category___updatedAt'
  | 'category___article___category___definition'
  | 'category___article___category___keyTerms'
  | 'category___article___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___article___category___children'
  | 'category___article___metaDescription___id'
  | 'category___article___metaDescription___children'
  | 'category___article___metaDescription___metaDescription'
  | 'category___article___spaceId'
  | 'category___article___createdAt'
  | 'category___article___updatedAt'
  | 'category___article___sys___type'
  | 'category___article___sys___revision'
  | 'category___article___mustRead'
  | 'category___article___frequently_asked_questions'
  | 'category___article___frequently_asked_questions___contentful_id'
  | 'category___article___frequently_asked_questions___id'
  | 'category___article___frequently_asked_questions___node_locale'
  | 'category___article___frequently_asked_questions___question'
  | 'category___article___frequently_asked_questions___category'
  | 'category___article___frequently_asked_questions___spaceId'
  | 'category___article___frequently_asked_questions___createdAt'
  | 'category___article___frequently_asked_questions___updatedAt'
  | 'category___article___frequently_asked_questions___children'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___id'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___children'
  | 'category___article___childrenContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___id'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___children'
  | 'category___article___childContentfulArticleMetaDescriptionTextNode___metaDescription'
  | 'category___article___parent___id'
  | 'category___article___parent___children'
  | 'category___article___children'
  | 'category___article___children___id'
  | 'category___article___children___children'
  | 'category___article___internal___content'
  | 'category___article___internal___contentDigest'
  | 'category___article___internal___description'
  | 'category___article___internal___fieldOwners'
  | 'category___article___internal___ignoreType'
  | 'category___article___internal___mediaType'
  | 'category___article___internal___owner'
  | 'category___article___internal___type'
  | 'category___pageDescription___id'
  | 'category___pageDescription___parent___id'
  | 'category___pageDescription___parent___children'
  | 'category___pageDescription___children'
  | 'category___pageDescription___children___id'
  | 'category___pageDescription___children___children'
  | 'category___pageDescription___internal___content'
  | 'category___pageDescription___internal___contentDigest'
  | 'category___pageDescription___internal___description'
  | 'category___pageDescription___internal___fieldOwners'
  | 'category___pageDescription___internal___ignoreType'
  | 'category___pageDescription___internal___mediaType'
  | 'category___pageDescription___internal___owner'
  | 'category___pageDescription___internal___type'
  | 'category___pageDescription___pageDescription'
  | 'category___pageDescription___sys___type'
  | 'category___spaceId'
  | 'category___createdAt'
  | 'category___updatedAt'
  | 'category___sys___type'
  | 'category___sys___revision'
  | 'category___definition'
  | 'category___definition___contentful_id'
  | 'category___definition___id'
  | 'category___definition___node_locale'
  | 'category___definition___title'
  | 'category___definition___mainText___raw'
  | 'category___definition___secondaryText___raw'
  | 'category___definition___seoTitle'
  | 'category___definition___slug'
  | 'category___definition___category___contentful_id'
  | 'category___definition___category___id'
  | 'category___definition___category___node_locale'
  | 'category___definition___category___title'
  | 'category___definition___category___slug'
  | 'category___definition___category___frequentlyAskedQuestions'
  | 'category___definition___category___article'
  | 'category___definition___category___spaceId'
  | 'category___definition___category___createdAt'
  | 'category___definition___category___updatedAt'
  | 'category___definition___category___definition'
  | 'category___definition___category___keyTerms'
  | 'category___definition___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___definition___category___children'
  | 'category___definition___metaDescription___id'
  | 'category___definition___metaDescription___children'
  | 'category___definition___metaDescription___metaDescription'
  | 'category___definition___spaceId'
  | 'category___definition___createdAt'
  | 'category___definition___updatedAt'
  | 'category___definition___sys___type'
  | 'category___definition___sys___revision'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___definition___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___definition___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___definition___parent___id'
  | 'category___definition___parent___children'
  | 'category___definition___children'
  | 'category___definition___children___id'
  | 'category___definition___children___children'
  | 'category___definition___internal___content'
  | 'category___definition___internal___contentDigest'
  | 'category___definition___internal___description'
  | 'category___definition___internal___fieldOwners'
  | 'category___definition___internal___ignoreType'
  | 'category___definition___internal___mediaType'
  | 'category___definition___internal___owner'
  | 'category___definition___internal___type'
  | 'category___keyTerms'
  | 'category___keyTerms___contentful_id'
  | 'category___keyTerms___id'
  | 'category___keyTerms___node_locale'
  | 'category___keyTerms___title'
  | 'category___keyTerms___mainText___raw'
  | 'category___keyTerms___secondaryText___raw'
  | 'category___keyTerms___seoTitle'
  | 'category___keyTerms___slug'
  | 'category___keyTerms___category___contentful_id'
  | 'category___keyTerms___category___id'
  | 'category___keyTerms___category___node_locale'
  | 'category___keyTerms___category___title'
  | 'category___keyTerms___category___slug'
  | 'category___keyTerms___category___frequentlyAskedQuestions'
  | 'category___keyTerms___category___article'
  | 'category___keyTerms___category___spaceId'
  | 'category___keyTerms___category___createdAt'
  | 'category___keyTerms___category___updatedAt'
  | 'category___keyTerms___category___definition'
  | 'category___keyTerms___category___keyTerms'
  | 'category___keyTerms___category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___keyTerms___category___children'
  | 'category___keyTerms___metaDescription___id'
  | 'category___keyTerms___metaDescription___children'
  | 'category___keyTerms___metaDescription___metaDescription'
  | 'category___keyTerms___spaceId'
  | 'category___keyTerms___createdAt'
  | 'category___keyTerms___updatedAt'
  | 'category___keyTerms___sys___type'
  | 'category___keyTerms___sys___revision'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___keyTerms___childrenContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___id'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___children'
  | 'category___keyTerms___childContentfulDefinitionMetaDescriptionTextNode___metaDescription'
  | 'category___keyTerms___parent___id'
  | 'category___keyTerms___parent___children'
  | 'category___keyTerms___children'
  | 'category___keyTerms___children___id'
  | 'category___keyTerms___children___children'
  | 'category___keyTerms___internal___content'
  | 'category___keyTerms___internal___contentDigest'
  | 'category___keyTerms___internal___description'
  | 'category___keyTerms___internal___fieldOwners'
  | 'category___keyTerms___internal___ignoreType'
  | 'category___keyTerms___internal___mediaType'
  | 'category___keyTerms___internal___owner'
  | 'category___keyTerms___internal___type'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children___id'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___children___children'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'category___childrenContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'category___childContentfulCategoryPageDescriptionTextNode___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___parent___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___parent___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children___id'
  | 'category___childContentfulCategoryPageDescriptionTextNode___children___children'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___content'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___contentDigest'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___description'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___fieldOwners'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___ignoreType'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___mediaType'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___owner'
  | 'category___childContentfulCategoryPageDescriptionTextNode___internal___type'
  | 'category___childContentfulCategoryPageDescriptionTextNode___pageDescription'
  | 'category___childContentfulCategoryPageDescriptionTextNode___sys___type'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulFrequentlyAskedQuestionsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFrequentlyAskedQuestionsEdge>;
  nodes: Array<ContentfulFrequentlyAskedQuestions>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulFrequentlyAskedQuestionsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulFrequentlyAskedQuestionsGroupConnectionDistinctArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsGroupConnectionMaxArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsGroupConnectionMinArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsGroupConnectionSumArgs = {
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};


export type ContentfulFrequentlyAskedQuestionsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulFrequentlyAskedQuestionsFieldsEnum;
};

export type ContentfulFrequentlyAskedQuestionsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulFrequentlyAskedQuestionsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulLeadMagnetTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeadMagnetTextTextNodeEdge>;
  nodes: Array<ContentfulLeadMagnetTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeadMagnetTextTextNodeGroupConnection>;
};


export type ContentfulLeadMagnetTextTextNodeConnectionDistinctArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeConnectionMaxArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeConnectionMinArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeConnectionSumArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};

export type ContentfulLeadMagnetTextTextNodeEdge = {
  next?: Maybe<ContentfulLeadMagnetTextTextNode>;
  node: ContentfulLeadMagnetTextTextNode;
  previous?: Maybe<ContentfulLeadMagnetTextTextNode>;
};

export type ContentfulLeadMagnetTextTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'text'
  | 'sys___type';

export type ContentfulLeadMagnetTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulLeadMagnetTextTextNodeEdge>;
  nodes: Array<ContentfulLeadMagnetTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulLeadMagnetTextTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulLeadMagnetTextTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeGroupConnectionMaxArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeGroupConnectionMinArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeGroupConnectionSumArgs = {
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};


export type ContentfulLeadMagnetTextTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulLeadMagnetTextTextNodeFieldsEnum;
};

export type ContentfulLeadMagnetTextTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulLeadMagnetTextTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulDefinitionMetaDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDefinitionMetaDescriptionTextNodeEdge>;
  nodes: Array<ContentfulDefinitionMetaDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulDefinitionMetaDescriptionTextNodeGroupConnection>;
};


export type ContentfulDefinitionMetaDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};

export type ContentfulDefinitionMetaDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulDefinitionMetaDescriptionTextNode>;
  node: ContentfulDefinitionMetaDescriptionTextNode;
  previous?: Maybe<ContentfulDefinitionMetaDescriptionTextNode>;
};

export type ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'metaDescription'
  | 'sys___type';

export type ContentfulDefinitionMetaDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulDefinitionMetaDescriptionTextNodeEdge>;
  nodes: Array<ContentfulDefinitionMetaDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulDefinitionMetaDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulDefinitionMetaDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulDefinitionMetaDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum;
};

export type ContentfulDefinitionMetaDescriptionTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulDefinitionMetaDescriptionTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulCategoryPageDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryPageDescriptionTextNodeEdge>;
  nodes: Array<ContentfulCategoryPageDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulCategoryPageDescriptionTextNodeGroupConnection>;
};


export type ContentfulCategoryPageDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulCategoryPageDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulCategoryPageDescriptionTextNode>;
  node: ContentfulCategoryPageDescriptionTextNode;
  previous?: Maybe<ContentfulCategoryPageDescriptionTextNode>;
};

export type ContentfulCategoryPageDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'pageDescription'
  | 'sys___type';

export type ContentfulCategoryPageDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryPageDescriptionTextNodeEdge>;
  nodes: Array<ContentfulCategoryPageDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulCategoryPageDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryPageDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};


export type ContentfulCategoryPageDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulCategoryPageDescriptionTextNodeFieldsEnum;
};

export type ContentfulCategoryPageDescriptionTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulCategoryPageDescriptionTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulArticleMetaDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleMetaDescriptionTextNodeEdge>;
  nodes: Array<ContentfulArticleMetaDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulArticleMetaDescriptionTextNodeGroupConnection>;
};


export type ContentfulArticleMetaDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeConnectionMaxArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeConnectionMinArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeConnectionSumArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};

export type ContentfulArticleMetaDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulArticleMetaDescriptionTextNode>;
  node: ContentfulArticleMetaDescriptionTextNode;
  previous?: Maybe<ContentfulArticleMetaDescriptionTextNode>;
};

export type ContentfulArticleMetaDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'metaDescription'
  | 'sys___type';

export type ContentfulArticleMetaDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulArticleMetaDescriptionTextNodeEdge>;
  nodes: Array<ContentfulArticleMetaDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulArticleMetaDescriptionTextNodeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulArticleMetaDescriptionTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeGroupConnectionMaxArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeGroupConnectionMinArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeGroupConnectionSumArgs = {
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};


export type ContentfulArticleMetaDescriptionTextNodeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulArticleMetaDescriptionTextNodeFieldsEnum;
};

export type ContentfulArticleMetaDescriptionTextNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulArticleMetaDescriptionTextNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentfulContentTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  displayField?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  sys?: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ArticlePreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlePreviewsQuery = { allContentfulArticle: { nodes: Array<{ slug?: string | null, title?: string | null, metaDescription?: { metaDescription?: string | null } | null, category?: { title?: string | null, slug?: string | null } | null }> } };

export type HomepageMustReadsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageMustReadsQuery = { allContentfulArticle: { edges: Array<{ node: { title?: string | null, slug?: string | null, updatedAt?: any | null, category?: { slug?: string | null, title?: string | null } | null } }> } };

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: { siteMetadata?: { defaultTitle?: string | null, titleTemplate?: string | null, defaultDescription?: string | null, siteUrl?: string | null, defaultImage?: string | null, twitterUsername?: string | null } | null } | null };

export type DefinitionsPreviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type DefinitionsPreviewsQuery = { allContentfulDefinition: { nodes: Array<{ slug?: string | null, title?: string | null, category?: { slug?: string | null } | null }> } };

export type MyQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type MyQueryQuery = { contentfulArticle?: { createdAt?: any | null, seoTitle?: string | null, slug?: string | null, title?: string | null, updatedAt?: any | null, body?: { raw?: string | null, references?: Array<{ __typename: 'ContentfulArticle', contentful_id: string, slug?: string | null, category?: { slug?: string | null } | null } | { __typename: 'ContentfulAsset', contentful_id: string, gatsbyImageData?: any | null, description?: string | null, publicUrl: string } | { __typename: 'ContentfulLeadMagnet', contentful_id: string, heading?: string | null, title?: string | null, type?: string | null, text?: { text?: string | null, id: string } | null, contentUpgrade?: { publicUrl: string } | null } | null> | null } | null, category?: { title?: string | null, slug?: string | null } | null, metaDescription?: { metaDescription?: string | null, id: string } | null, mainImage?: { gatsbyImageData?: any | null, description?: string | null, publicUrl: string } | null } | null };

export type CategoryPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type CategoryPageQuery = { allContentfulArticle: { edges: Array<{ node: { slug?: string | null, title?: string | null, mustRead?: boolean | null, createdAt?: any | null, updatedAt?: any | null, category?: { title?: string | null, slug?: string | null } | null, mainImage?: { gatsbyImageData?: any | null, description?: string | null } | null } }> }, contentfulCategory?: { slug?: string | null, title?: string | null, pageDescription?: { pageDescription?: string | null } | null, frequentlyAskedQuestions?: Array<{ question?: string | null, answer?: { raw?: string | null } | null, fullArticle?: { slug?: string | null, title?: string | null, category?: { slug?: string | null } | null } | null } | null> | null, keyTerms?: Array<{ slug?: string | null, title?: string | null, mainText?: { raw?: string | null } | null } | null> | null } | null };

export type DefinitionDataQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type DefinitionDataQuery = { contentfulDefinition?: { createdAt?: any | null, seoTitle?: string | null, slug?: string | null, title?: string | null, updatedAt?: any | null, mainText?: { raw?: string | null } | null, secondaryText?: { raw?: string | null } | null, metaDescription?: { metaDescription?: string | null } | null, category?: { slug?: string | null } | null } | null };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyNodeQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyNodeQuery = { allContentfulArticle: { edges: Array<{ node: { __typename: 'ContentfulArticle', slug?: string | null, category?: { slug?: string | null } | null } }> }, allContentfulDefinition: { edges: Array<{ node: { __typename: 'ContentfulDefinition', slug?: string | null, category?: { slug?: string | null } | null } }> }, allContentfulCategory: { edges: Array<{ node: { __typename: 'ContentfulCategory', slug?: string | null } }> } };
